/**
  * HamsterKombat Playground Games Promo Code Keys Generator
  * @author Aaron Delasy
  * @version 1.3.0
  */


// Variabel global untuk menyimpan nilai yang dipilih
let TIMING_STRATEGY = 'realistic';
const gameKeys = ['FLUF', 'TILE', 'ZOO', 'TRIM', 'POLY', 'TWERK', 'MERGE', 'CUBE', 'TRAIN'];
const listElementTemplate = `<form>
    <div class="border border-gray-300 grid gap-2 rounded p-2 box-list">
      <div>
        <input type="checkbox" name="game" class="text-blue-600 max-w-0 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label class="text-xs font-medium">Default checkbox</label>
      </div>
      <select name="jumlah" class="bg-gray-50 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500">
        <option value="1">1 🔑</option>
        <option value="2">2 🔑</option>
        <option value="3">3 🔑</option>
        <option value="4">4 🔑</option>
      </select>
    </div>
  </form>
  `;

const gameListRoot = document.querySelector('#list-game');

for (const gameKey of gameKeys) {
  // Buat elemen baru setiap kali
  const listNode = document.createElement('div');

  listNode.innerHTML = listElementTemplate;

  // Ambil elemen dari template yang baru dibuat
  const gameCheckbox = listNode.querySelector('input');
  const gameLabel = listNode.querySelector('label');
  const gameNumKeys = listNode.querySelector('select');

  // Atur atribut untuk elemen baru
  gameCheckbox.value = gameKey;
  gameCheckbox.setAttribute('id', gameKey);
  gameNumKeys.setAttribute('id', `${gameKey}-select`);
  gameLabel.textContent = gameKey;

  if (gameKey === "FLUF") {
    gameNumKeys.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
      const option = document.createElement('option');
      const textOption = document.createTextNode(i + ' 🔑');
      option.value = i;
      option.append(textOption);
      gameNumKeys.appendChild(option);
    }
  }

  // Tambahkan elemen baru ke gameListRoot
  gameListRoot.appendChild(listNode.firstElementChild);
}
// Menambahkan event listener pada elemen select
document.getElementById('generateButton').addEventListener('click', function () {
  // Ambil nilai dari elemen select
  TIMING_STRATEGY = document.getElementById('speed').value;



  const DEBUG = parseArg(['debug'], (it) => (['true', 'false', ''].includes(it) ? it !== 'false' : null), false);
  const CLIENT_STRATEGY = parseArg(['client-strategy'], (it) => (['keep', 'unique'].includes(it) ? it : null), 'unique');
  const SERVER_ERROR_COOLDOWN = 300_000;
  const SERVER_ERROR_RETRIES = 3;
  const WITH_REINSTALL_TIME = true;
  const DEVICE = parseArg(['d', 'device'], (it) => (['android', 'ios'].includes(it) ? it : null));
  const EXCLUDE = parseArg(['e', 'exclude'], (it) => it.split(',').map((it2) => it2.trim()).filter((it2) => it2 !== ''), []);
  const KEYS = parseArg(['k', 'keys'], (it) => Number.parseInt(it, 10) || null, 4);
  const ONLY = parseArg(['o', 'only'], (it) => it.split(',').map((it2) => it2.trim()).filter((it2) => it2 !== ''), []);

  const generateEstimatedTime = {
    FLUF: {
      time: (TIMING_STRATEGY === 'realistic') ? 13 * 60_000 : 2 * 60_000
    },
    FLUF: {
      time: (TIMING_STRATEGY === 'realistic') ? 13 * 60_000 : 3 * 60_000
    },
    ZOO: {
      time: (TIMING_STRATEGY === 'realistic') ? 13 * 60_000 : 2 * 60_000
    },
    GANGS: {
      time: (TIMING_STRATEGY === 'realistic') ? 23 * 60_000 : 9 * 60_000
    },
    CAFE: {
      time: (TIMING_STRATEGY === 'realistic') ? 23 * 60_000 : 4 * 60_000
    },
    TRIM: {
      time: (TIMING_STRATEGY === 'realistic') ? 8 * 60_000 : 3 * 60_000
    },
    RACE: {
      time: (TIMING_STRATEGY === 'realistic') ? 7 * 60_000 : 2 * 60_000
    },
    POLY: {
      time: (TIMING_STRATEGY === 'realistic') ? 5 * 60_000 : 1 * 60_000
    },
    TWERK: {
      time: (TIMING_STRATEGY === 'realistic') ? 7 * 60_000 : 4 * 60_000
    },
    MERGE: {
      time: (TIMING_STRATEGY === 'realistic') ? 8 * 60_000 : 3 * 60_000
    },
    CLONE: {
      time: (TIMING_STRATEGY === 'realistic') ? 15 * 60_000 : 11 * 60_000
    },
    CUBE: {
      time: (TIMING_STRATEGY === 'realistic') ? 9 * 60_000 : 1 * 60_000
    },
    TRAIN: {
      time: (TIMING_STRATEGY === 'realistic') ? 12 * 60_000 : 2 * 60_000
    },
    BIKE: {
      time: (TIMING_STRATEGY === 'realistic') ? 13 * 60_000 : 5 * 60_000
    }
  };

  const GAMES = {
    FLUF: async ({ _, collect, delay, event, getClient, id, instance, login, origin, setup }) => {
      setup('app-token', '112887b0-a8af-4eb2-ac63-d82df78283d9');
      setup('promo-id', '112887b0-a8af-4eb2-ac63-d82df78283d9');
      setup('unity-version', '2022.3.27f1');

      if (origin === 'ios') {
        setup('user-agent', 'FluffCrusade/236 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2022.3.27f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
      }

      await login(1, { clientId: id('uuid'), clientOrigin: 'deviceid' });
      await getClient(1);

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 720_000 : 120_000);
        await event(1, { eventId: id('uuid'), eventOrigin: 'undefined' });
      }

      await collect(1);
    },
    TILE: async ({ _, auth, collect, delay, event, getClient, id, instance, login, origin, setup }) => {
      setup('app-token', 'e68b39d2-4880-4a31-b3aa-0393e7df10c7');
      setup('promo-id', 'e68b39d2-4880-4a31-b3aa-0393e7df10c7');
      setup('unity-version', '2020.3.48f1');

      if (origin === 'ios') {
        setup('user-agent', 'TileTrio/3 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2020.3.48f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)');
      }

      const clientId = await auth('cedar.games');

      await login(1, { clientId, clientOrigin: 'deviceid', clientVersion: _`ios ? 12.4.3 : 12.4.57` });
      await getClient(1);

      if (TIMING_STRATEGY === 'realistic') {
        await delay(600_000);
      }

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 30_000 : 20_000);
        await event(1, { eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'gt_progress' });
      }

      await collect(1);
    },
    ZOO: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', 'b2436c89-e0aa-4aed-8046-9b0515e1c46b');
      setup('promo-id', 'b2436c89-e0aa-4aed-8046-9b0515e1c46b');
      setup('unity-version', '2022.3.15f1');

      if (origin === 'ios') {
        setup('user-agent', 'Zoopolis/1 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2022.3.15f1 (UnityWebRequest/1.0, libcurl/8.4.0-DEV)');
      }

      await login({ clientId: id(_`ios ? UUID : h32`), clientOrigin: origin, clientVersion: _`ios ? 1.2.8 : 1.2.7` });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 120_000 : 20_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'ZoopolisEvent' });
      }

      await collect();
    },
    GANGS: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', 'b6de60a0-e030-48bb-a551-548372493523');
      setup('promo-id', 'c7821fa7-6632-482c-9635-2bd5798585f9');
      setup('unity-version', '2022.3.41f1');

      if (origin === 'ios') {
        setup('user-agent', 'UrbanCrimeLifeCityHustle/0 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2022.3.41f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
      }

      await login({ clientId: id(_`ios ? s5_UUID : s5_h32`), clientOrigin: origin });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 80_000 : 40_000);
        await event({ eventId: id('h16-h16'), eventOrigin: 'undefined' });
      }

      await collect();
    },
    CAFE: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', 'bc0971b8-04df-4e72-8a3e-ec4dc663cd11');
      setup('promo-id', 'bc0971b8-04df-4e72-8a3e-ec4dc663cd11');
      setup('user-agent', 'Mozilla/5.0');

      await login({ clientId: id(_`ios ? UUID : h16`), clientOrigin: origin, clientVersion: '2.24.1' });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 90_000 : 20_000);
        await event({ eventId: id('ts'), eventOrigin: 'undefined', eventType: '5visitorsChecks' });
      }

      await collect();
    },
    TRIM: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', 'ef319a80-949a-492e-8ee0-424fb5fc20a6');
      setup('promo-id', 'ef319a80-949a-492e-8ee0-424fb5fc20a6');
      setup('unity-version', '2021.3.17f1');

      if (origin === 'ios') {
        setup('user-agent', 'MowandTrim/197 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2021.3.17f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)');
      }

      await login({ clientId: id(_`ios ? ts-d7 : ts-d19`), clientOrigin: origin });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 50_000 : 20_000);
        await event({ eventId: 'StartLevel', eventOrigin: 'undefined' });
      }

      await collect();
    },
    RACE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', '8814a785-97fb-4177-9193-ca4180ff9da8');
      setup('promo-id', '8814a785-97fb-4177-9193-ca4180ff9da8');
      setup('unity-version', '2020.3.18f1');

      if (origin === 'ios') {
        setup('user-agent', 'Truckbountyhole/12 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2020.3.18f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
      }

      await login({ clientId: id('uuid'), clientOrigin: origin });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 60_000 : 20_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'racing' });
      }

      await collect();
    },
    POLY: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71');
      setup('promo-id', '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71');
      setup('unity-version', '2021.3.39f1');

      if (origin === 'ios') {
        setup('user-agent', 'Polysphere/159 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2021.3.39f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
      }

      await login({ clientId: id('uuid'), clientOrigin: origin, clientVersion: _`ios ? 1.15.31 : 1.15.301` });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 10_000 : 3_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'test' });
      }

      await collect();
    },
    TWERK: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', '61308365-9d16-4040-8bb0-2f4a4c69074c');
      setup('promo-id', '61308365-9d16-4040-8bb0-2f4a4c69074c');
      setup('unity-version', '2021.3.15f1');

      if (origin === 'ios') {
        setup('user-agent', 'Twerk/491 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2021.3.15f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)');
      }

      await login({ clientId: id(_`ios ? ts-d7 : ts-d19`), clientOrigin: origin });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 30_000 : 20_000);
        await event({ eventId: 'StartLevel', eventOrigin: 'undefined' });
      }

      await collect();
    },
    MERGE: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', '8d1cc2ad-e097-4b86-90ef-7a27e19fb833');
      setup('promo-id', 'dc128d28-c45b-411c-98ff-ac7726fbaea4');

      if (origin === 'ios') {
        setup('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148');
      } else {
        setup('user-agent', 'Mozilla/5.0 (Linux; Android 12; SM-S9110 Build/W528JS; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36');
      }

      await login({ clientId: id(_`ios ? ts-d7 : ts-d19`), clientOrigin: origin });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 60_000 : 20_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'spend-energy' });
      }

      await collect();
    },
    CLONE: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', '74ee0b5b-775e-4bee-974f-63e7f4d5bacb');
      setup('promo-id', 'fe693b26-b342-4159-8808-15e3ff7f8767');
      setup('unity-version', '2022.3.25f1');

      if (origin === 'ios') {
        setup('user-agent', 'Myclonearmy/12 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2022.3.25f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
      }

      await login({ clientId: id(_`ios ? UUID : h32`), clientOrigin: origin });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 150_000 : 120_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'MiniQuest' });
      }

      await collect();
    },
    CUBE: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', 'd1690a07-3780-4068-810f-9b5bbf2931b2');
      setup('promo-id', 'b4170868-cef0-424f-8eb9-be0622e8e8e3');
      setup('unity-version', '2022.3.20f1');

      if (origin === 'ios') {
        setup('user-agent', 'ChainCube/4 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2022.3.20f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
      }

      await login({ clientId: id('uuid'), clientOrigin: origin, clientVersion: _`ios ? 1.78.39 : 1.78.42` });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 150_000 : 20_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'cube_sent' });
      }

      await collect();
    },
    TRAIN: async ({ _, collect, delay, event, id, instance, login, origin, setup }) => {
      setup('app-token', '82647f43-3f87-402d-88dd-09a90025313f');
      setup('promo-id', 'c4480ac7-e178-4973-8061-9ed5b2e17954');
      setup('unity-version', '2022.3.20f1');

      if (origin === 'ios') {
        setup('user-agent', 'TrainMiner/20 CFNetwork/1498.700.2 Darwin/23.6.0');
      } else {
        setup('user-agent', 'UnityPlayer/2022.3.20f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
      }

      await login({ clientId: id(_`ios ? UUID : h32`), clientOrigin: origin, clientVersion: _`ios ? 2.4.16 : 2.6.4` });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 600_000 : 120_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'hitStatue' });
      }

      await collect();
    },
    BIKE: async ({ _, collect, delay, event, id, instance, login, setup }) => {
      setup('app-token', 'd28721be-fd2d-4b45-869e-9f253b554e50');
      setup('promo-id', '43e35910-c168-4634-ad4f-52fd764a843f');

      await login({ clientId: id(_`ios ? ts-d7 : ts-d19`), clientOrigin: _`android ? deviceid : ios` });

      while (!instance.hasCode) {
        await delay(TIMING_STRATEGY === 'realistic' ? 50_000 : 20_000);
        await event({ eventId: id('uuid'), eventOrigin: 'undefined' });
      }

      await collect();
    },
  };

  const GAMES_EXPIRATIONS = {
    BIKE: new Date('2024-08-30T07:30:00.000Z'),
    CAFE: new Date('2024-09-02T07:30:00.000Z'),
    CLONE: new Date('2024-08-26T00:00:00.000Z'),
    GANGS: new Date('2024-09-02T07:30:00.000Z'),
    RACE: new Date('2024-08-30T07:30:00.000Z'),
    TILE: new Date('2024-09-04T07:30:00.000Z'),
  };

  const CLIENT = {};

  //
  // Functions
  //

  function debug(...args) {
    if (!DEBUG) {
      return;
    }

    console.error.apply(null, [new Date(), ...args]);
  }

  async function globalDelay(ms) {
    debug(`Waiting ${ms}ms`);

    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async function globalFetch(url, options, retry = 0) {
    debug(url, options);
    let res;

    try {
      res = await fetch(url, options);
    } catch (err) {
      if (retry < SERVER_ERROR_RETRIES) {
        console.error('Received network error, will retry after cooldown period.');
        debug(err);

        await globalDelay(SERVER_ERROR_COOLDOWN);
        return globalFetch(url, options, retry + 1);
      }

      throw err;
    }

    if (!res.ok) {
      if (DEBUG) {
        const text = await res.text();
        debug(text);
      }

      if (retry < SERVER_ERROR_RETRIES) {
        console.error('Received internal server error, will retry after cooldown period.');
        await globalDelay(SERVER_ERROR_COOLDOWN);
        return globalFetch(url, options, retry + 1);
      }

      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    debug(data);
    return data;
  }

  function randomBytes(len) {
    return Array.from(
      crypto.getRandomValues(new Uint8Array(len / 2)),
      (it) => it.toString(16).padStart(2, '0'),
    ).join('');
  }

  function randomDigits(len) {
    const buf = Array(len).fill(null);
    return buf.map(() => Math.floor(Math.random() * 10)).join('');
  }

  function randomString(len, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    const charsLen = chars.length;
    let result = '';

    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * charsLen));
    }

    return result;
  }

  function uuidv4() {
    return '10000000-1000-4000-8000-100000000000'.replace(
      /[018]/g,
      (c) => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16),
    );
  }

  async function getPromoCode(gp, gameKey) {
    return gp.getCode(gameKey);
  }

  /**
   * Generates random string with provided type.
   * Types explanation:
   *   ts - timestamp.
   *   h5 - lowercase version of random string in hex format of length 5.
   *   s5 - lowercase version of random string of length 5.
   *   5d - random string of digits of length 5.
   *   UUID - uppercase version of string in UUID v4 format.
   *   uuid - lowercase version of string in UUID v4 format.
   *   uuid-0 - lowercase version of NULL value of UUID v4 format.
   */
  function globalId(type) {
    switch (type) {
      case 'h16': {
        return randomBytes(16);
      }
      case 'h16-h16': {
        return `${randomBytes(16)}-${randomBytes(16)}`;
      }
      case 'h32': {
        return randomBytes(32);
      }
      case 's5_h32': {
        return `${randomString(5, 'abcdefghijklmnopqrstuvwxyz0123456789')}_${randomBytes(32)}`;
      }
      case 's5_UUID': {
        return `${randomString(5, 'abcdefghijklmnopqrstuvwxyz0123456789')}_${uuidv4().toUpperCase()}`;
      }
      case 'ts': {
        return Date.now().toString();
      }
      case 'ts-d7': {
        return `${Date.now()}-${randomDigits(7)}`;
      }
      case 'ts-d19': {
        return `${Date.now()}-${randomDigits(19)}`;
      }
      case 'UUID': {
        return uuidv4().toUpperCase();
      }
      case 'uuid': {
        return uuidv4();
      }
      case 'uuid-0': {
        return '00000000-0000-0000-0000-000000000000';
      }
      default: {
        throw new Error(`Tried generating unknown id '${type}'.`);
      }
    }
  }

  function parseArg(names, parser, fallback = null) {
    if (typeof process === 'undefined' || !Array.isArray(process.argv)) {
      return fallback;
    }

    for (let i = 1; i < process.argv.length; i++) {
      const arg = process.argv[i];

      for (let j = 0; j < names.length; j++) {
        const name = names[j];

        if (arg.toLowerCase().startsWith(`--${name}=`)) {
          const val = arg.slice(name.length + 3);
          const parsed = parser(val);

          if (parsed !== null && name !== 'debug') {
            debug(`Applied filter "${name}":`, parsed);
          }

          return parsed === null ? fallback : parsed;
        }
      }
    }

    return fallback;
  }

  function filterExpired(gameKey) {
    if (!Object.prototype.hasOwnProperty.call(GAMES_EXPIRATIONS, gameKey)) {
      return true;
    }

    return GAMES_EXPIRATIONS[gameKey] > new Date();
  }

  //
  // Classes
  //

  class GamePromo {
    constructor() {
      this.authToken = null;
      this.config = {};
      this.gameKey = null;
      this.hasCode = false;
      this.key = null;
      this.origin = null;
    }

    _(strings, ...values) {
      const template = String.raw({ raw: strings }, ...values);
      const result = /^([\w ./(),-]+)\s+\?\s+([\w ./(),-]+)\s+:\s+([\w ./(),-]+)$/.exec(template);

      if (result === null) {
        throw new Error(`Unable to preprocess '${template}'`);
      }

      const [, condition, consequent, alternate] = result;

      if (condition !== 'android' && condition !== 'ios') {
        throw new Error(`Unable to preprocess condition '${condition}' in '${template}'`);
      }

      const isAndroidAndroid = condition === 'android' && this.origin === 'android';
      const isIosIos = condition === 'ios' && this.origin === 'ios';

      return isAndroidAndroid || isIosIos ? consequent : alternate;
    }

    async fetchApi(version, path, body = null) {
      const headers = {};

      if (this.authToken !== null) {
        headers['Authorization'] = `Bearer ${this.authToken}`;
      }

      if (this.config['user-agent'] !== undefined) {
        headers['User-Agent'] = this.config['user-agent'];
      }

      if (this.config['unity-version'] !== undefined) {
        headers['X-Unity-Version'] = this.config['unity-version'];
      }

      const versionPath = version === 0 ? '' : `/${version.toString()}`;
      const url = `https://api.gamepromo.io/promo${versionPath}${path}`;
      const bodyText = JSON.stringify(body);

      return globalFetch(url, {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Accept-Encoding': 'deflate, gzip',
          'Accept-Language': 'en-US,en;q=0.9',
          'Content-Length': bodyText.length.toString(),
          'Content-Type': 'application/json',
          ...headers,
        },
        body: bodyText,
      });
    }

    async setConfig(key, value) {
      this.config[key] = value;
    }

    async authFetch(vendor) {
      if (CLIENT_STRATEGY === 'keep' && CLIENT[this.gameKey] !== undefined) {
        debug('Re-using auth');
        return;
      }

      switch (vendor) {
        case 'cedar.games': {
          const body = new URLSearchParams({
            method: '_post',
            data: JSON.stringify({
              'deviceId': globalId('uuid'),
              'socialUserId': '',
              'network': 'fb',
              'UTCOffset': '3',
              'version': this._`ios ? 12.4.3 : 12.4.57`,
              'clientMergeAware': true,
              'ads_id': this._`ios ? ${globalId('uuid-0')} : ${globalId('uuid')}`,
              ...(this.origin === 'ios' ? { 'apple_id': '' } : { 'android_id': globalId('h16') }),
              'device_model': this._`ios ? iPhone11,6 : Samsung SM-S9110`,
              'memory': this._`ios ? 3754 : 2999`,
              'os': this._`ios ? iOS 17.6.1 : Android OS 12 / API-32 (W528JS/228)`,
              'screen_width': this._`ios ? 1242 : 1080`,
              'screen_height': this._`ios ? 2688 : 1920`,
              'screen_size': this._`ios ? 6.465209 : 6.119187`,
            }),
          }).toString();

          const res = await globalFetch('https://app-t2d.cedar.games/mobile/auth', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Accept-Encoding': 'gzip, deflate, br',
              'Accept-Language': 'en-US,en;q=0.9',
              'Content-Length': body.length.toString(),
              'Content-Type': 'application/x-www-form-urlencoded',
              'User-Agent': this.config['user-agent'],
              'X-Unity-Version': this.config['unity-version'],
            },
            body: body,
          });

          return res.userId.toString();
        }
      }
    }

    async loginFetch(versionOrData, data) {
      if (CLIENT_STRATEGY === 'keep' && CLIENT[this.gameKey] !== undefined) {
        debug('Re-using auth token');
        return;
      }

      const version = typeof versionOrData === 'number' ? versionOrData : 0;
      const finalData = typeof versionOrData !== 'number' ? versionOrData : data;

      const res = await this.fetchApi(version, '/login-client', {
        appToken: this.config['app-token'],
        ...finalData,
      });

      if (typeof res.clientToken === 'string' && res.clientToken !== '') {
        this.authToken = res.clientToken;

        CLIENT[this.gameKey] = {
          authToken: this.authToken,
          origin: this.origin,
        };
      }
    }

    async getClientFetch(version) {
      const promoId = this.config['promo-id'];
      await this.fetchApi(version, '/get-client', { promoId });
    }

    async eventFetch(versionOrData, data) {
      const version = typeof versionOrData === 'number' ? versionOrData : 0;
      const finalData = typeof versionOrData !== 'number' ? versionOrData : data;
      const promoId = this.config['promo-id'];
      // on ios promoId is sent as first property, on android it's sent last
      const payload = this.origin === 'ios' ? { promoId, ...finalData } : { ...finalData, promoId };
      const res = await this.fetchApi(version, '/register-event', payload);

      if (res.hasCode === true) {
        this.hasCode = true;
      }
    }

    async collectFetch(versionOrNull = null) {
      const version = versionOrNull ?? 0;

      const res = await this.fetchApi(version, '/create-code', {
        promoId: this.config['promo-id'],
      });

      if (typeof res.promoCode === 'string' && res.promoCode !== '') {
        this.key = res.promoCode;
      }
    }

    async getCode(gameKey) {
      this.authToken = null;
      this.config = {};
      this.gameKey = gameKey;
      this.hasCode = false;
      this.key = null;
      this.origin = DEVICE ?? Math.random() < 0.5 ? 'ios' : 'android';

      if (CLIENT[this.gameKey] !== undefined) {
        this.authToken = CLIENT[this.gameKey].authToken;
        this.origin = CLIENT[this.gameKey].origin;
      }

      debug('Origin:', this.origin);

      await GAMES[gameKey]({
        _: this._.bind(this),
        collect: this.collectFetch.bind(this),
        delay: async (ms) => {
          const totalMs = Math.floor(ms * (Math.random() / 4 + 1));
          await globalDelay(totalMs);
        },
        id: globalId,
        instance: this,
        auth: this.authFetch.bind(this),
        login: this.loginFetch.bind(this),
        getClient: this.getClientFetch.bind(this),
        event: this.eventFetch.bind(this),
        origin: this.origin,
        setup: this.setConfig.bind(this),
      });

      if (this.key === null) {
        throw new Error(`Unable to get ${gameKey} promo.`);
      }

      return this.key;
    }
  }

  class Queue {
    constructor() {
      const self = this;

      this.items = [];
      this.workers = [
        {
          id: uuidv4(),
          available: true,
          async run(item) {
            item.started = true;
            this.available = false;
            await item.cb();
            this.available = true;
            self.tick();
          },
        },
      ];
    }

    hasAvailableWorkers() {
      return this.workers.some((it) => it.available);
    }

    nextAvailableWorker() {
      return this.workers.find((it) => it.available);
    }

    tick() {
      debug('Queue tick');

      if (!this.hasAvailableWorkers()) {
        return;
      }

      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];

        if (item.started) {
          continue;
        }

        debug('Running:', item.id);
        this.nextAvailableWorker().run(item);

        if (!this.hasAvailableWorkers()) {
          return;
        }
      }
    }

    push(cb) {
      this.items.push({
        id: uuidv4(),
        cb,
        started: false,
      });

      this.tick();
    }
  }


  async function getPromoCodeSimulation(gamePromoInstance, game) {
    // Simulasi waktu pemrosesan kode promo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${game}-PROMO-CODE-${Math.floor(Math.random() * 1000)}`);
      }, 4000);
    });
  }


  function startProcess(estimatedTime) {
    const progressBar = document.getElementById('progress');
    progressBar.parentElement.classList.remove('hidden');

    // Update interval dalam milidetik (misalnya, setiap 100 ms)
    const updateInterval = 100;

    // Waktu mulai proses
    const startTime = Date.now();

    // Inisialisasi progress bar
    let progress = 0;

    // Kembalikan Promise yang menyelesaikan setelah progress bar selesai

    // Update progress bar menggunakan interval
    const intervalId = setInterval(() => {
      // Hitung waktu berlalu sejak proses dimulai
      const elapsedTime = Date.now() - startTime;

      // Hitung persentase berdasarkan estimasi waktu penyelesaian
      progress = Math.min((elapsedTime / estimatedTime) * 99, 99);

      // Update progress bar
      progressBar.style.width = progress + '%';
      progressBar.textContent = Math.floor(progress) + '%';

      // Jika progress mencapai 100%, hentikan interval dan resolusi Promise
      if (progress >= 99) {
        clearInterval(intervalId);
        progressBar.style.width = '99%';
        progressBar.textContent = '99%';
        resolve();
      }
    }, updateInterval);

  }



  async function getPromoCodesInParallel(requests) {


    const errorMessage = document.getElementById('errorMessage');
    let resultElement = document.getElementById('result');
    const generateButton = document.getElementById('generateButton');
    const textGenerateButton = document.getElementById('text-generate');
    const progressBar = document.getElementById('progress');
    const spinner = document.querySelector('#spinner');
    const counterKeys = document.querySelector('#counter');


    resultElement.innerHTML = '';
    errorMessage.classList.add('hidden');

    // Disable the button and show loading icon
    generateButton.disabled = true;
    textGenerateButton.textContent = '';
    generateButton.classList.add('hidden');
    spinner.classList.remove('hidden');

    const tasks = [];
    const keys = [];

    const gameRequests = requests.map(item => item.game);

    const maxDuration = gameRequests.reduce((max, game) => {
      const currentDuration = generateEstimatedTime[game]?.time;
      return currentDuration > max ? currentDuration : max;
    }, 0);



    // Extract game keys and create tasks efficiently
    let counter = 1;
    const jumlahKunci = requests.reduce((acc, current) => {
      return acc + parseInt(current.jumlah);
    }, 0);
    counterKeys.innerHTML = `0 dari ${jumlahKunci}`;
    for (const request of requests) {
      const taskPromises = Array.from({ length: request.jumlah }, async () => {
        try {
          const gp = new GamePromo(); // Buat instance baru untuk setiap tugas

          // Simulasi fungsi async untuk mendapatkan kode promo
          const code = await getPromoCode(gp, request.game);
          keys.push(code);
          counterKeys.innerHTML = `${counter++} dari ${jumlahKunci}`;
          resultElement.innerHTML += `
          <div class="flex justify-between items-center mt-2">
            <span class="text-sm">${code}</span>
            <button 
              class="relative text-blue-600 text-sm" 
              onclick="copyToClipboard(this, '${code}')"
              data-tooltip-target="tooltip-default">
              <span class="tooltip-inner bg-gray-900 text-white text-xs rounded py-1 px-2 z-10">Salin</span>
            </button>
          </div>`;


        } catch (error) {
          console.error(`Error generating code for ${request.game}:`, error);
          errorMessage.classList.remove('hidden');

          // Implement retry logic here (optional)
          throw error; // Re-throw for Promise.allSettled handling
        }
      });

      tasks.push(...taskPromises);
    }

    try {
      tasks.push(startProcess(maxDuration))
      const results = await Promise.all(tasks);
      // Get a reference to the last interval + 1
      const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);

      // Clear any timeout/interval up to that id
      for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
      }
      progressBar.style.width = '100%';
      progressBar.textContent = '100%';
      if (keys.length > 1) {
        const allKeys = keys.join('\n');
        resultElement.innerHTML += `
        <button 
          class="flex w-full justify-center text-blue-600 text-sm text-center mt-4" 
          onclick='copyToClipboard(this, ${JSON.stringify(allKeys)}, "Salin Semua")'
          data-tooltip-target="tooltip-default">
          <span class="tooltip-inner text-blue-600 text-sm text-center rounded py-1 px-2 z-10">Salin semua</span>
        </button>
      `;
      }

      generateButton.classList.remove('hidden');
      generateButton.disabled = false; // Re-enable the button
      textGenerateButton.textContent = "Generate";
      spinner.classList.add('hidden');
    } catch (error) {
      console.error('Error in executing tasks:', error);
    }
  }





  const forms = document.querySelectorAll('form');

  const requests = Array.from(forms).map(form => {
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    return formObject;
  }).filter(item => item.hasOwnProperty('game'));

  try {
    Promise.all(requests).then((values) => {
      getPromoCodesInParallel(values);
    });

  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }

});

function toggleAllGames(checkbox) {

  const gameCheckboxes = document.querySelectorAll('input[name=game]');
  gameCheckboxes.forEach(cb => cb.checked = checkbox.checked)
}

// Function to set the key amount for all games to 4
function setKeyAmount(checkbox) {
  const gameAmounts = document.querySelectorAll('select[name=jumlah]');
  gameAmounts.forEach(select => {
    const maxAmount = select.querySelectorAll('option').length;
    if (checkbox.checked) {
      select.value = maxAmount;
    } else {
      select.value = 1;
    }
  });

}


function copyToClipboard(button, text, textDefault = 'Salin') {
  navigator.clipboard.writeText(text).then(() => {
    const tooltip = button.querySelector('.tooltip-inner');
    tooltip.textContent = 'Disalin✓';
  }).catch(err => {
    console.error('Gagal menyalin kunci:', err);
  });
}
