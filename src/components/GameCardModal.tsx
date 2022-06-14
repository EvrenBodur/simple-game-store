import React from "react";
import ImageGallery from "react-image-gallery";
import "../styles/GameCardModal.css";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
  game: any;
}

const GameCardModal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  game,
}) => {
  const galleryImages = () => {
    return game.Screenshots.map((image: string) => {
      return {
        original: image,
        thumbnail: image,
      };
    });
  };

  const renderGallery = (): JSX.Element => {
    return (
      <ImageGallery
        showNav={false}
        showPlayButton={false}
        autoPlay={false}
        items={galleryImages()}
      />
    );
  };

  return (
    <div className="modal-container">
      <div>
        <button onClick={() => setIsModalOpen(!isModalOpen)}>Close</button>
      </div>
      <div className="modal-body">
        <div className="modal-carousel">{renderGallery()}</div>
        <p>{game.Summary}</p>
        <div>Menu</div>
      </div>
    </div>
  );
};

export default GameCardModal;
