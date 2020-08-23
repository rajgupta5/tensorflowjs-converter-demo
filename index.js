
const imageURL = './bus.jpg';
const image2URL = './image2.jpg';

let vhclePromise;
// let anprPromise;
let baseModel = 'lite_mobilenet_v2';



window.onload = () => vhclePromise = cocoSsd.load({modelUrl: './models/model.json'});


const image = document.getElementById('image');
image.src = imageURL;

const runButton = document.getElementById('run');
runButton.onclick = async () => {
   const vhcle_model = await vhclePromise;
   // const anpr_model = await model;
   // const anpr_model = await anprPromise;
   
  console.log('model loaded');
  console.time('predict1');
  const result = await vhcle_model.detect(image);
  
    // let anpr2 = await anprPromise.executeAsync(expandedDim);

    // const anprOp = await anpr_model.detect(image);
    // console.log(anprOp)
    // const data = []
    // for (let i = 0; i < anprOp.length; i++){
    //     data.push(anpr[i].dataSync())
    // }
    console.log("data");

  // }
  console.timeEnd('predict1');


  const c = document.getElementById('canvas');
  const context = c.getContext('2d');

  
  var sourceX = 150;
  var sourceY = 0;
  var sourceWidth = 687;
  var sourceHeight = 687;
  // var destWidth = sourceWidth;
  // var destHeight = sourceHeight;
  // var destX = c.width / 2 - destWidth / 2;
  // var destY = c.height / 2 - destHeight / 2;

  //startY, startX, endY, endX
  var destY = result[0].bbox[0];
  var destX = result[0].bbox[2];
  var destWidth = result[0].bbox[1];
  var destHeight = result[0].bbox[3];

  // var destWidth = result[0].bbox[0];
  // var destHeight = result[0].bbox[1];
  // var destX = c.width / 2 - destWidth / 2;
  // var destY = c.height / 2 - destHeight / 2;

  // context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

  // const tempVal = context.getImageData(result[0].bbox[0], result[0].bbox[1], result[0].bbox[2], result[0].bbox[3])
  // canvas1.getContext("2d");
  // context.putImageData(imageData, 0, 0);
  // context.drawImage(tempVal, 0, 0);

  context.drawImage(image, 0, 0);
  context.font = '10px Arial';

  console.log('number of detections: ', result.length);
  for (let i = 0; i < result.length; i++) {
    context.beginPath();
    context.rect(...result[i].bbox);
    // context.stroke();
    // context.clip();
    context.lineWidth = 1;
    context.strokeStyle = 'blue';
    context.fillStyle = 'blue';
    context.stroke();
 
    context.fillText(
        result[i].score.toFixed(3) + ' ' + result[i].class, result[i].bbox[0],
        result[i].bbox[1] > 10 ? result[i].bbox[1] - 5 : 10);
  }
  // ocrReading(context)
};

