export default () => {
    return <div className={'flex gap-2 justify-between px-5 md:px-20  flex-wrap-reverse'}>
        <div className={'flex flex-col justify-center gap-1'}>
            <p className={'text-5xl rowdies-bold '}>Elevating Ideas to Digital Reality</p>
            <p className={'text-2xl'}>Transforming Concepts into Seamless Software Solutions</p>
            <div className={'flex gap-2 flex-wrap'}>
                <img src="/icons/react.png" alt="React" className={'w-10 h-10'}/>
                <img src="/icons/node.png" alt="Node.js" className={'w-10 h-10'}/>
                <img src="/icons/flutter.png" alt="Flutter" className={'w-10 h-10'}/>
                <img src="/icons/firebase.png" alt="Firebase" className={'w-10 h-10'}/>
                <img src="/icons/gcloud.png" alt="Google Cloud" className={'w-10 h-10'}/>
                <img src="/icons/android.png" alt="Android" className={'w-10 h-10'}/>
                <img src="/icons/apple.png" alt="Apple" className={'w-10 h-10'}/>
                <img src="/icons/ubuntu.png" alt="Ubuntu" className={'w-10 h-10'}/>
            </div>
        </div>
        <div className={'sm:w-[100%] sm:h-[100%] md:w-[30%] md:h-[30%] '}>
            <img src="/YasserCherfaouiBorderlessEnhanced.jpg" alt="Yasser Cherfaoui - Software Engineer"/>
        </div>

    </div>
}