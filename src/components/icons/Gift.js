import { SvgIcon } from "@material-ui/core";

const Gift = props => (
  <SvgIcon {...props}>
    <path d="M7.57.008c-.38 0-.752.14-1.086.324-.444.244-.81.606-1.064 1.035-.255.43-.416.913-.416 1.404 0 .493.07.98.26 1.425.122.29.29.563.498.805H1.5C.678 5 0 5.678 0 6.5v3c0 .822.678 1.5 1.5 1.5h21c.822 0 1.5-.678 1.5-1.5v-3c0-.822-.678-1.5-1.5-1.5h-4.79c.04-.064.082-.124.114-.193.153-.33.206-.693.16-1.047-.046-.354-.19-.684-.406-.96-.216-.278-.497-.49-.814-.628-.317-.137-.66-.174-1-.174-.56 0-1.05.27-1.454.582-.4.312-.696.686-.964 1.027l-.813 1.038-1.34-2.047c-.35-.538-.724-1.114-1.24-1.612-.522-.502-1.198-.978-2-.978zm.31.998c.485 0 .975.31 1.378.7.408.393.747.9 1.1 1.44L11.57 5H8.408c-.272 0-.523-.005-.748-.04-.225-.033-.44-.098-.627-.196-.37-.193-.676-.547-.85-.957-.132-.313-.18-.656-.18-.99 0-.342.11-.662.276-.942.165-.28.406-.513.685-.666.278-.154.593-.204.914-.204zm7.944 1.99c.186 0 .377.022.543.094.166.07.316.186.424.324.108.138.18.308.202.477.022.168-.005.346-.074.495-.098.21-.306.396-.547.492-.243.097-.56.117-.927.117L13.5 5l.633-.775c.263-.336.512-.64.79-.856.277-.216.597-.374.9-.374zM1.5 6h21c.286 0 .5.214.5.5v3c0 .286-.214.5-.5.5h-21c-.286 0-.5-.214-.5-.5v-3c0-.286.214-.5.5-.5zm9 1c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5s.5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm3 0c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5s.5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm-11 5c-.276.004-.504.224-.5.5v10c0 .822.678 1.5 1.5 1.5h17c.822 0 1.5-.678 1.5-1.5v-10c.005-.338-.248-.5-.5-.5s-.505.162-.5.5v10c0 .285-.214.5-.5.5H14V12.5c0-.277-.223-.5-.5-.5s-.5.223-.5.5V23h-2V12.5c0-.277-.223-.5-.5-.5s-.5.223-.5.5V23H3.5c-.286 0-.5-.215-.5-.5v-10c.004-.282-.218-.504-.5-.5z" />
  </SvgIcon>
);

Gift.muiName = SvgIcon.muiName;

export default Gift;