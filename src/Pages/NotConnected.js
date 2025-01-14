import ButtonPrimary from "../Components/ButtonPrimary";

export default function NotConnected(props: { action: () => * }) {
    return <div className="max-w-md mx-auto">
        {/* <iframe width="100%" height={270} src="https://www.youtube-nocookie.com/embed/urlid"
                title="Plutonium Network Demo" frameBorder="0"
                allowFullScreen>&nbsp;</iframe> */}
        <ButtonPrimary className="font-bold text-2xl my-5"
                       type="button"
                       onClick={props.action}>
            Connect
        </ButtonPrimary>
    </div>;
}
