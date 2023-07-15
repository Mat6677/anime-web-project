import { useEffect, useState } from "react";

export const Slider = () => {
  const images = [
    "src/img/sliderImage/slide-img-1.png",
    "src/img/sliderImage/slide-img-2.png",
    "src/img/sliderImage/slide-img-3.png",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };
  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <>
      <div
        className={`
        w-screen
        relative
        py-10
        flex
        items-center
        justify-center  
        bg-[url('src/img/sliderImage/slider-bg-${selectedIndex}.svg')]
        bg-cover
        bg-center
      `}
      >
        <img className="max-w-[600px] max-[800px]:w-screen max-[800px]:slider-img" src={selectedImage} alt="AnimePoster" />
        <div className="absolute top-0 h-full w-full flex items-center justify-between">
          <button className="ml-12" onClick={previous}>
            <i className="fa-solid fa-chevron-left text-3xl"></i>
          </button>
          <button className="mr-12" onClick={next}>
            <i className="fa-solid fa-chevron-right text-3xl"></i>
          </button>
        </div>
      </div>
    </>
  );
};
