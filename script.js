const DEBUG = false;
const SERVER_ERROR_COOLDOWN = 300_000;
const SERVER_ERROR_RETRIES = 3;
const WITH_REINSTALL_TIME = true;

const games = {
  TRIM: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', 'ef319a80-949a-492e-8ee0-424fb5fc20a6');
    setup('promo-id', 'ef319a80-949a-492e-8ee0-424fb5fc20a6');
    setup('unity-version', '2021.3.17f1');

    if (origin === 'ios') {
      setup('user-agent', 'MowandTrim/170 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2021.3.17f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'ts7d' : 'ts19d') });

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

    await login({ clientOrigin: origin, clientId: id('uuid') });

    while (!instance.hasCode) {
      await delay(TIMING_STRATEGY === 'realistic' ? 60_000 : 20_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'racing' });
    }

    await collect();
  },
  POLY: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71');
    setup('promo-id', '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71');
    setup('unity-version', '2021.3.39f1');

    if (origin === 'ios') {
      setup('user-agent', 'Polysphere/147 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2021.3.39f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id('uuid'), clientVersion: '1.15.2' });

    while (!instance.hasCode) {
      await delay(10_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'test' });
    }

    await collect();
  },
  TWERK: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '61308365-9d16-4040-8bb0-2f4a4c69074c');
    setup('promo-id', '61308365-9d16-4040-8bb0-2f4a4c69074c');
    setup('unity-version', '2021.3.15f1');

    if (origin === 'ios') {
      setup('user-agent', 'Twerk/485 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2021.3.15f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'ts7d' : 'ts19d') });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventId: 'StartLevel', eventOrigin: 'undefined' });
    }

    await collect();
  },
  MERGE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '8d1cc2ad-e097-4b86-90ef-7a27e19fb833');
    setup('promo-id', 'dc128d28-c45b-411c-98ff-ac7726fbaea4');

    if (origin === 'ios') {
      setup('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148');
    } else {
      setup('user-agent', 'Mozilla/5.0 (Linux; Android 12; SM-S9110 Build/W528JS; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/95.0.4638.74 Mobile Safari/537.36');
    }

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'ts7d' : 'ts19d') });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventOrigin: 'undefined', eventId: id('uuid'), eventType: 'spend-energy' });
    }

    await collect();
  },
  CUBE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', 'd1690a07-3780-4068-810f-9b5bbf2931b2');
    setup('promo-id', 'b4170868-cef0-424f-8eb9-be0622e8e8e3');
    setup('unity-version', '2022.3.20f1');

    if (origin === 'ios') {
      setup('user-agent', 'ChainCube/3 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2022.3.20f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id('uuid'), clientVersion: '1.78.33' });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'cube_sent' });
    }

    await collect();
  },
  TRAIN: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', '82647f43-3f87-402d-88dd-09a90025313f');
    setup('promo-id', 'c4480ac7-e178-4973-8061-9ed5b2e17954');
    setup('unity-version', '2022.3.20f1');

    if (origin === 'ios') {
      setup('user-agent', 'TrainMiner/20 CFNetwork/1498.700.2 Darwin/23.6.0');
    } else {
      setup('user-agent', 'UnityPlayer/2022.3.20f1 (UnityWebRequest/1.0, libcurl/8.5.0-DEV)');
    }

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'uuid-upper' : 'rand32'), clientVersion: '2.4.16' });

    while (!instance.hasCode) {
      await delay(120_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined', eventType: 'hitStatue' });
    }

    await collect();
  },
  BIKE: async ({ collect, delay, event, id, instance, login, origin, setup }) => {
    setup('app-token', 'd28721be-fd2d-4b45-869e-9f253b554e50');
    setup('promo-id', '43e35910-c168-4634-ad4f-52fd764a843f');
    // todo(delasy): Actually scan BIKE game headers

    await login({ clientOrigin: origin, clientId: id(origin === 'ios' ? 'ts7d' : 'ts19d') });

    while (!instance.hasCode) {
      await delay(20_000);
      await event({ eventId: id('uuid'), eventOrigin: 'undefined' });
    }

    await collect();
  },
};

class Logger {
  static debug() {
    if (!DEBUG) {
      return;
    }

    console.log.apply(null, arguments);
  }

  static info() {
    console.info.apply(null, arguments);
  }

  static panic() {
    console.error.apply(null, arguments);
  }
}

async function globalDelay(ms) {
  Logger.debug(`Waiting ${ms}ms`);

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function globalId(type) {
  switch (type) {
    case 'rand32': {
      return Array.from(
        crypto.getRandomValues(new Uint8Array(16)),
        (it) => it.toString(16).padStart(2, '0'),
      ).join('');
    }
    case 'uuid':
    case 'uuid-upper': {
      const val = '10000000-1000-4000-8000-100000000000'.replace(
        /[018]/g,
        (c) => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16),
      );

      return type === 'uuid-upper' ? val.toUpperCase() : val;
    }
    case 'ts7d':
    case 'ts19d': {
      const timestamp = Date.now();
      const buf = Array(type === 'ts7d' ? 7 : 19).fill();
      const digits = buf.map(() => Math.floor(Math.random() * 10)).join('');
      return `${timestamp}-${digits}`;
    }
    default: {
      throw new Error(`Tried generating unknown id '${type}'.`);
    }
  }
}

class GamePromo {
  constructor() {
    this.authToken = null;
    this.config = {};
    this.hasCode = false;
    this.key = null;
    this.origin = 'ios';
  }

  async fetchApi(path, body = null, retry = 0) {
    const headers = {
      accept: '*/*',
      'accept-encoding': 'deflate, gzip',
      'content-type': 'application/json',
    };

    if (this.authToken !== null) {
      headers.authorization = `Bearer ${this.authToken}`;
    }

    if (this.config['user-agent'] !== undefined) {
      headers['user-agent'] = this.config['user-agent'];
    }

    if (this.config['unity-version'] !== undefined) {
      headers['x-unity-version'] = this.config['unity-version'];
    }

    const url = `https://api.gamepromo.io${path}`;

    const options = {
      method: 'POST',
      cache: 'no-store',
      headers,
      body: JSON.stringify(body),
    };

    Logger.debug(url, options);
    const res = await fetch(url, options);

    if (!res.ok) {
      if (DEBUG) {
        const text = await res.text();
        Logger.debug(text);
      }

      if (retry < SERVER_ERROR_RETRIES) {
        Logger.info('Received internal server error, will retry after cooldown period.');
        await globalDelay(SERVER_ERROR_COOLDOWN);
        return this.fetchApi(path, body, retry + 1);
      }

      throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    Logger.debug(data);
    return data;
  }

  async configSet(key, value) {
    this.config[key] = value;
  }

  async loginFetch(data) {
    const res = await this.fetchApi('/promo/login-client', {
      appToken: this.config['app-token'],
      ...data,
    });

    if (typeof res.clientToken === 'string' && res.clientToken !== '') {
      this.authToken = res.clientToken;
    }
  }

  async eventFetch(data) {
    const promoId = this.config['promo-id'];
    // on ios promoId is sent as first property, on android it's sent last
    const payload = this.origin === 'ios' ? { promoId, ...data } : { ...data, promoId };
    const res = await this.fetchApi('/promo/register-event', payload);

    if (res.hasCode === true) {
      this.hasCode = true;
    }
  }

  async collectFetch() {
    const res = await this.fetchApi('/promo/create-code', {
      promoId: this.config['promo-id'],
    });

    if (typeof res.promoCode === 'string' && res.promoCode !== '') {
      this.key = res.promoCode;
    }
  }

  async getCode(gameKey) {
    this.authToken = null;
    this.config = {};
    this.hasCode = false;
    this.key = null;
    this.origin = Math.random() < 0.5 ? 'ios' : 'android';
    Logger.debug('origin:', this.origin);

    await games[gameKey]({
      collect: this.collectFetch.bind(this),
      delay: async (ms) => {
        const totalMs = Math.floor(ms * (Math.random() / 4 + 1));
        await globalDelay(totalMs);
      },
      id: globalId,
      instance: this,
      login: this.loginFetch.bind(this),
      event: this.eventFetch.bind(this),
      origin: this.origin,
      setup: this.configSet.bind(this),
    });

    if (this.key === null) {
      throw new Error(`Unable to get ${gameKey} promo.`);
    }

    return this.key;
  }
}

async function getPromoCode(gp, gameKey) {
  return gp.getCode(gameKey);
}

function copyToClipboard(button, text, textDefault = 'Salin') {
  navigator.clipboard.writeText(text).then(() => {
    const tooltip = button.querySelector('.tooltip-inner');
    tooltip.textContent = 'Disalin!';
    setTimeout(() => {
      tooltip.textContent = textDefault;
    }, 2000);
  }).catch(err => {
    console.error('Gagal menyalin kunci:', err);
  });
}


async function generateKeys() {
  const gameKey = document.getElementById('gameSelect').value;
  const keyCount = document.getElementById('keyCount').value;
  const errorMessage = document.getElementById('errorMessage');
  const resultElement = document.getElementById('result');
  const generateButton = document.getElementById('generateButton');
  const textGenerateButton = document.getElementById('text-generate');

  resultElement.textContent = '';
  errorMessage.classList.add('hidden');

  // Disable the button and show loading icon
  generateButton.disabled = true;
  textGenerateButton.textContent = 'Tunggu..'
  generateButton.querySelector('#spinner').classList.remove('hidden');

  try {
    const gameKeys = Object.keys(games);
    const gp = new GamePromo();

    let keys = [];
    for (let i = 0; i < keyCount; i++) {
      const code = await getPromoCode(gp, gameKey);
      keys.push(code);
      // Logger.info(code);

      if (WITH_REINSTALL_TIME && i !== keyCount - 1) {
        await globalDelay((Math.floor(Math.random() * 11) + 20) * 1_000);
      }

      const keyHtml = `
<div class="flex justify-between items-center mt-2">
  <span>${code}</span>
  <button 
    class="relative text-blue-600 text-sm" 
    onclick="copyToClipboard(this, '${code}')"
    data-tooltip-target="tooltip-default">
    <span class="tooltip-inner bg-gray-900 text-white text-xs rounded py-1 px-2 z-10">Salin</span>
    
  </button>
</div>`;
      resultElement.innerHTML += keyHtml;
      if (i == keyCount - 1 && i > 0) {
        const allKeys = keys.join('\n');
        resultElement.innerHTML += `
<button 
  class="flex w-full justify-center text-blue-600 text-sm text-center mt-4" 
  onclick='copyToClipboard(this, ${JSON.stringify(allKeys)}, "Salin Semua")'
  data-tooltip-target="tooltip-default">
  <span class="tooltip-inner text-blue-600 text-sm text-center rounded py-1 px-2 z-10">Salin semua</span>
</button>
        `
      }
    }

  } catch (error) {
    // console.log(error)
    errorMessage.classList.remove('hidden');
  } finally {
    generateButton.disabled = false; // Re-enable the button
    textGenerateButton.textContent = "Generate"
    generateButton.querySelector('#spinner').classList.add('hidden');
  }
}
