import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#00DFFF',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './pick-n-mix-logo.svg',
  fullDecal: './pick-n-mix-logo.svg',
});

export default state;
