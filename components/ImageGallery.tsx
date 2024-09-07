import React from "react";

const BigImage = (props: { srcDir: string }) => {
    const { srcDir } = props;
    return (
        <img
            src={srcDir}
            className={`
                        w-[41vh] h-[41vh] flex-none object-cover 
                        hover:scale-[1.02] hover:cursor-pointer transition-all`}
            onClick={() => {
                window.open(`${srcDir}`, '_blank');
            }} />
    );
}

const SmallImageCol = (props: { srcDirs: string[] }) => {
    const { srcDirs } = props;
    return (
        <div className="flex flex-col gap-2">
            {srcDirs.map((name, idx) => (
                <img
                    key={idx}
                    src={name}
                    className={`
                    w-[20vh] h-[20vh] object-cover
                    hover:scale-[1.02] hover:cursor-pointer transition-all`}
                    onClick={() => {
                        window.open(name, '_blank');
                    }} />
            ))}
        </div>
    );
}

const ImageGallery = (props: { galleryRootDir: string, imageFileNames: string[], bigImgPos: { x: "left" | "right" | null } }) => {
    const { galleryRootDir, imageFileNames, bigImgPos } = props;

    return (
        <div className={`flex flex-wrap gap-2 w-[63vh]`}>

            {bigImgPos.x == "left" ? (
                <React.Fragment>
                    <BigImage srcDir={`${galleryRootDir}${imageFileNames[0]}`} />
                    <SmallImageCol srcDirs={[`${galleryRootDir}${imageFileNames[1]}`, `${galleryRootDir}${imageFileNames[2]}`]} />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <SmallImageCol srcDirs={[`${galleryRootDir}${imageFileNames[1]}`, `${galleryRootDir}${imageFileNames[2]}`]} />
                    <BigImage srcDir={`${galleryRootDir}${imageFileNames[0]}`} />
                </React.Fragment>
            )}

            {imageFileNames.slice(3, 6).map((name, idx) => (
                <img
                    key={idx}
                    src={`${galleryRootDir}${name}`}
                    className={`
                        w-[20vh] h-[20vh] object-cover
                        hover:scale-[1.02] hover:cursor-pointer transition-all`}
                    onClick={() => {
                        window.open(`${galleryRootDir}${name}`, '_blank');
                    }} />
            ))}

        </div>
    );
}

export default ImageGallery;
