import { ref } from 'vue';
import axios from 'axios';

const helpArticles = ref(null);
const keyID = 'wp.json:prod:1';

export default () => {
  const ls = fetchLocalStorage();
  helpArticles.value = ls || null;
  return helpArticles;
};

const fetchLocalStorage = (key = keyID) => {
  const entry = window.localStorage.getItem(key);
  if (entry?.[0] !== '{') {
    return null;
  }

  return JSON.parse(entry);
};

const saveLocalStorage = (entry, key = keyID) => {
  if (!entry) {
    window.localStorage.removeItem(key);
    return;
  }

  const json = JSON.stringify(entry);
  window.localStorage.setItem(key, json);
}

const fetchHash = async () => {
  try {
    const { data } = await axios.get('/wp/hash');
    return data?.hash || undefined;
  } catch (error) {
    console.warn('failed to fetch hash', error);
  }
};

const updateHelpArticles = async () => {
  try {
    const { data } = await axios.get('/wp/json', {
      timeout: 30000,
    });
    if (!data?.wp) {
      console.warn('help articles missing...');
      return;
    }
    saveLocalStorage(data.wp);
    helpArticles.value = data.wp;
  } catch (error) {
    console.warn('failed to update help articles', error);
  }
}

const checkForUpdates = async () => {
  const lhash = fetchLocalStorage()?.hash;
  const hash = await fetchHash();

  if (!hash || hash === lhash) {
    return;
  }

  updateHelpArticles();
}

checkForUpdates();
