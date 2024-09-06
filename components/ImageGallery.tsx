const ImageGallery = (props: { galleryRootDir: string, imageFileNames: string[] }) => {
    const { galleryRootDir, imageFileNames } = props;

    return (
        <div className={`flex flex-wrap gap-2 w-[66vh]`}>
            {/* 左上角的合并大图片 */}
            <img
                src={`${galleryRootDir}${imageFileNames[0]}`}
                className={`
                    w-[41vh] h-[41vh] flex-none object-cover 
                    hover:scale-[1.02] hover:cursor-pointer transition-all`}
                onClick={() => {
                    window.open(`${galleryRootDir}${imageFileNames[0]}`, '_blank');
                }} />

            {/* 大图片旁边的小图片 */}
            <div className="flex flex-col gap-2">
                {imageFileNames.slice(1, 3).map((name, idx) => (
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
