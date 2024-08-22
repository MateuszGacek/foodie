"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<
    ArrayBuffer | string | StaticImport | null
  >(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const pickClick = () => {
    imageInput.current?.click();
  };

  const imageChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const fileReader = new FileReader();
    if (!file) {
      setPickedImage(null);
      return;
    }
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              alt="The image selected by tje user."
              fill
              src={pickedImage}
            />
          )}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image.jpeg"
          name={name}
          onChange={imageChange}
          required
        />
        <button className={classes.button} onClick={pickClick} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
