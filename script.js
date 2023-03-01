import 'core-js/stable';
import 'regenerator-runtime/runtime';

const videElement = document.getElementById('video');
const btn = document.getElementById('button');

//Prompt use to select media stream, pass to video element, then play

const selectMedia = async function () {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia();

    videElement.srcObject = media;

    videElement.onloadedmetadata = () => {
      videElement.play();
    };
  } catch (err) {
    console.log(err);
  }
};

btn.addListener('click', async () => {
  btn.disabled = true;

  await videElement.requestPictureInPicture();

  btn.disabled = false;
});

selectMedia();
