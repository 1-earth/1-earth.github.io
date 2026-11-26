/**
 * KRCITY shared tile registry
 * ----------------------------------------------------------------------------
 * Single source of truth for blueprint chars → runtime map ids / flags / height
 * / detail overlays. Used by:
 *   - validateKrcityMap (this file)
 *   - create.html builder palette, preview, export alphabet
 *   - index.html map load, walk/drive checks, ground colors
 *
 * HOW TO ADD A TILE
 * 1) If it needs a new ground kind, add an id to TILE_ID + a row in TILE_BASE.
 * 2) Add a char entry in TILE_CHARS (and to TILE_ORDER for the builder palette).
 * 3) If it's a prop on an existing surface, reuse an id (e.g. PAVEMENT) and set
 *    detail to a mapDetails bucket name (auto-created at load).
 * 4) Reload — validator, builder, and game pick it up. Paint it in create.html.
 *
 * Examples already wired:
 *   Z plaza  — walkable open ground (id PLAZA)
 *   W water  — non-walkable / non-drivable (id WATER)
 *   K/T/L/I  — detail props on pavement or road
 *   A/N      — trees on park / sidewalk (same detail bucket)
 */
(function (root) {
  'use strict';

  const TILE_ID = {
    PARK: 0,
    ROAD: 1,
    BUILDING_LOW: 2,
    BUILDING_MID: 3,
    BUILDING_TALL: 4,
    PAVEMENT: 5,
    PLAZA: 6,
    WATER: 7
  };

  /**
   * Per runtime map[] id. Flags drive collision / AI / render branches.
   * height = game 3D building height (0 = flat ground).
   */
  const TILE_BASE = {
    [TILE_ID.PARK]: {
      name: 'park',
      flags: { walkable: true, park: true },
      height: 0,
      color: '#355936',
      gameGround: '#355936'
    },
    [TILE_ID.ROAD]: {
      name: 'road',
      flags: { road: true, drivable: true, walkable: true },
      height: 0,
      color: '#29251f',
      gameGround: null // use PALETTE.road in game
    },
    [TILE_ID.BUILDING_LOW]: {
      name: 'buildingLow',
      flags: { solid: true, building: true },
      height: 100,
      previewHeight: 18,
      color: '#9d988f',
      gameGround: null
    },
    [TILE_ID.BUILDING_MID]: {
      name: 'buildingMid',
      flags: { solid: true, building: true },
      height: 120,
      previewHeight: 26,
      color: '#817d75',
      gameGround: null
    },
    [TILE_ID.BUILDING_TALL]: {
      name: 'buildingTall',
      flags: { solid: true, building: true },
      height: 180,
      previewHeight: 38,
      color: '#68655f',
      gameGround: null
    },
    [TILE_ID.PAVEMENT]: {
      name: 'sidewalk',
      flags: { walkable: true, pavement: true },
      height: 0,
      color: '#beb39d',
      gameGround: null // use PALETTE.pavement
    },
    [TILE_ID.PLAZA]: {
      name: 'plaza',
      flags: { walkable: true, plaza: true },
      height: 0,
      color: '#a89a82',
      gameGround: '#9a8b72'
    },
    [TILE_ID.WATER]: {
      name: 'water',
      flags: { water: true },
      height: 0,
      // Negative = depressed below street level (game draw uses this).
      surfaceZ: -16,
      color: '#2a4a5c',
      gameGround: '#1e3a4a',
      basinWall: '#243848',
      basinWallShade: '#1a2c38'
    }
  };

  /**
   * Blueprint alphabet. `id` selects TILE_BASE; `detail` (optional) is a
   * mapDetails list key filled at load ({ r, c } pushed per marker).
   * Builder-only fields: name, color, mark, key (hotkey).
   */
  const TILE_CHARS = {
    R: { id: TILE_ID.ROAD, name: 'Road', detail: null, color: '#29251f' },
    I: {
      id: TILE_ID.ROAD,
      name: 'Traffic light',
      detail: 'trafficLights',
      color: '#29251f',
      mark: '#c9a227'
    },
    P: { id: TILE_ID.PARK, name: 'Park', detail: null, color: '#355936' },
    S: { id: TILE_ID.PAVEMENT, name: 'Sidewalk', detail: null, color: '#beb39d' },
    '2': {
      id: TILE_ID.BUILDING_LOW,
      name: 'Building low',
      detail: null,
      color: '#9d988f'
    },
    '3': {
      id: TILE_ID.BUILDING_MID,
      name: 'Building mid',
      detail: null,
      color: '#817d75'
    },
    '4': {
      id: TILE_ID.BUILDING_TALL,
      name: 'Building tall',
      detail: null,
      color: '#68655f'
    },
    K: {
      id: TILE_ID.PAVEMENT,
      name: 'Car park',
      detail: 'carparks',
      color: '#2a2620'
    },
    T: {
      id: TILE_ID.PAVEMENT,
      name: 'Transformer',
      detail: 'transformers',
      color: '#3c5641'
    },
    L: {
      id: TILE_ID.PAVEMENT,
      name: 'Lime bay',
      detail: 'limeBays',
      color: '#b8e000'
    },
    Z: { id: TILE_ID.PLAZA, name: 'Plaza', detail: null, color: '#a89a82' },
    W: { id: TILE_ID.WATER, name: 'Water', detail: null, color: '#2a4a5c' },
    A: {
      id: TILE_ID.PARK,
      name: 'Tree (park)',
      detail: 'trees',
      color: '#2f5a32',
      mark: '#1e3d22'
    },
    N: {
      id: TILE_ID.PAVEMENT,
      name: 'Tree (sidewalk)',
      detail: 'trees',
      color: '#beb39d',
      mark: '#2f5a32'
    }
  };

  /** Builder palette / hotkey order. */
  const TILE_ORDER = ['R', 'I', 'P', 'S', 'Z', 'W', 'A', 'N', '2', '3', '4', 'K', 'T', 'L'];

  function baseOf(id) {
    return TILE_BASE[id] || null;
  }

  function charDef(ch) {
    return TILE_CHARS[ch] || null;
  }

  function isValidChar(ch) {
    return Object.prototype.hasOwnProperty.call(TILE_CHARS, ch);
  }

  function validCharsString() {
    return TILE_ORDER.join('') + Object.keys(TILE_CHARS).filter(function (ch) {
      return TILE_ORDER.indexOf(ch) < 0;
    }).join('');
  }

  /** { R: 'road', I: 'road+trafficLights', ... } for docs / export comments. */
  function legendObject() {
    const out = {};
    TILE_ORDER.forEach(function (ch) {
      const def = TILE_CHARS[ch];
      if (!def) return;
      const base = baseOf(def.id);
      const baseName = (base && base.name) || String(def.id);
      out[ch] = def.detail ? baseName + '+' + def.detail : baseName;
    });
    return out;
  }

  /**
   * Decode one blueprint char → runtime tile + optional detail bucket.
   * @returns {{ id: number, detail: string|null, def: object, base: object }|null}
   */
  function decode(ch) {
    const def = charDef(ch);
    if (!def) return null;
    const base = baseOf(def.id);
    if (!base) return null;
    return { id: def.id, detail: def.detail || null, def: def, base: base };
  }

  function flags(id) {
    const base = baseOf(id);
    return (base && base.flags) || {};
  }

  function height(id) {
    const base = baseOf(id);
    return base ? base.height | 0 : 0;
  }

  function previewHeight(chOrId) {
    if (typeof chOrId === 'string') {
      const def = charDef(chOrId);
      if (!def) return 0;
      const base = baseOf(def.id);
      return (base && (base.previewHeight || base.height)) || 0;
    }
    const base = baseOf(chOrId);
    return (base && (base.previewHeight || 0)) || 0;
  }

  function colorForChar(ch) {
    const def = charDef(ch);
    if (def && def.color) return def.color;
    return '#777';
  }

  function colorForId(id) {
    const base = baseOf(id);
    return (base && base.color) || '#777';
  }

  function gameGroundColor(id) {
    const base = baseOf(id);
    return base ? base.gameGround : null;
  }

  /** World Z of the walkable/visible surface (0 = street; negative = pit). */
  function surfaceZ(id) {
    const base = baseOf(id);
    return base && typeof base.surfaceZ === 'number' ? base.surfaceZ : 0;
  }

  function hasFlag(id, name) {
    return !!flags(id)[name];
  }

  function isRoad(id) { return hasFlag(id, 'road'); }
  function isWalkable(id) { return hasFlag(id, 'walkable'); }
  function isDrivable(id) { return hasFlag(id, 'drivable'); }
  function isSolid(id) { return hasFlag(id, 'solid'); }
  function isBuilding(id) { return hasFlag(id, 'building'); }
  function isPavement(id) { return hasFlag(id, 'pavement'); }
  function isPark(id) { return hasFlag(id, 'park'); }
  function isPlaza(id) { return hasFlag(id, 'plaza'); }
  function isWater(id) { return hasFlag(id, 'water'); }

  /** BUILDING_HEIGHTS-style map for game render. */
  function buildingHeightsMap() {
    const out = {};
    Object.keys(TILE_BASE).forEach(function (k) {
      out[k] = TILE_BASE[k].height | 0;
    });
    return out;
  }

  /** Unique detail bucket names → empty arrays for mapDetails. */
  function emptyDetails() {
    const out = {};
    Object.keys(TILE_CHARS).forEach(function (ch) {
      const d = TILE_CHARS[ch].detail;
      if (d && !Object.prototype.hasOwnProperty.call(out, d)) out[d] = [];
    });
    return out;
  }

  /** Builder palette entries (create.html TILES). */
  function builderTiles() {
    return TILE_ORDER.map(function (ch) {
      const def = TILE_CHARS[ch];
      return {
        ch: ch,
        name: def.name,
        key: ch,
        color: def.color,
        mark: def.mark || null,
        id: def.id,
        detail: def.detail || null,
        flags: Object.assign({}, flags(def.id))
      };
    });
  }

  function validateBlueprint(blueprint) {
    const errors = [];
    if (!blueprint || typeof blueprint !== 'object') {
      return { ok: false, errors: ['KRCITY_MAP is missing or not an object'] };
    }
    const size = blueprint.size | 0;
    if (size <= 0) errors.push('size must be a positive integer');
    const rows = blueprint.rows;
    if (!Array.isArray(rows)) {
      errors.push('rows must be an array of strings');
      return { ok: false, errors };
    }
    if (rows.length !== size) {
      errors.push('rows length ' + rows.length + ' !== size ' + size);
    }
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      if (typeof row !== 'string') {
        errors.push('rows[' + r + '] is not a string');
        continue;
      }
      if (row.length !== size) {
        errors.push('rows[' + r + '] length ' + row.length + ' !== size ' + size);
      }
      for (let c = 0; c < row.length; c++) {
        const ch = row.charAt(c);
        if (!isValidChar(ch)) {
          errors.push('unknown char "' + ch + '" at rows[' + r + '][' + c + ']');
          if (errors.length > 40) {
            errors.push('… further errors truncated');
            return { ok: false, errors };
          }
        }
      }
    }
    return { ok: errors.length === 0, errors };
  }

  const api = {
    ID: TILE_ID,
    BASE: TILE_BASE,
    CHARS: TILE_CHARS,
    ORDER: TILE_ORDER,
    baseOf: baseOf,
    charDef: charDef,
    isValidChar: isValidChar,
    validCharsString: validCharsString,
    legendObject: legendObject,
    decode: decode,
    flags: flags,
    height: height,
    previewHeight: previewHeight,
    colorForChar: colorForChar,
    colorForId: colorForId,
    gameGroundColor: gameGroundColor,
    surfaceZ: surfaceZ,
    isRoad: isRoad,
    isWalkable: isWalkable,
    isDrivable: isDrivable,
    isSolid: isSolid,
    isBuilding: isBuilding,
    isPavement: isPavement,
    isPark: isPark,
    isPlaza: isPlaza,
    isWater: isWater,
    buildingHeightsMap: buildingHeightsMap,
    emptyDetails: emptyDetails,
    builderTiles: builderTiles,
    validateBlueprint: validateBlueprint,
    // Back-compat alias used by index.html / create.html / map-data.js
    validateKrcityMap: validateBlueprint
  };

  root.KrcityTiles = api;
  root.validateKrcityMap = validateBlueprint;
})(typeof window !== 'undefined' ? window : globalThis);
