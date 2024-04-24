
src='https://easytender.s3.ap-south-1.amazonaws.com/1710866895529.mp4'

const isImage = /\.(jpeg|jpg|gif|png)$/i.test(src);
const isVideo = /\.(mp4|ogg|webm)$/i.test(src);

if (isImage) {
    console.log("img")
//   return <img src={src} alt="Image" />;
} else if (isVideo) {
    console.log("ivid")
//   return <video controls><source src={src} type="video/mp4" /></video>;
} else {
    console.log("ila")
//   return <p>Unsupported file type</p>;
}