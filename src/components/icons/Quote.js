import { SvgIcon } from "@mui/material";

const Quote = props => (
  <SvgIcon {...props}>
    <path d="M6 21c1.668 0 2.794-.573 3.62-1.385.826-.812 1.38-1.947 1.38-3.115 0-.952-.226-1.825-.61-2.63-.382-.804-.882-1.515-1.37-2.198-.488-.682-.97-1.34-1.34-2.035C7.306 8.945 7 8.24 7 7.5c0-.947.274-1.953.886-2.677.32-.376-.078-.937-.553-.803-2.064.58-3.89 1.827-5.205 3.52C.812 9.233 0 11.356 0 13.5c0 1.84.44 3.708 1.595 5.184C2.8 20.09 4.332 21 6 21zm0-1c-1.5 0-2.623-.907-3.618-1.933C1.402 16.814 1 15.147 1 13.5c0-1.925.735-3.825 1.917-5.345.886-1.14 2.104-1.96 3.416-2.568C6.1 6.207 6 6.832 6 7.5c0 .948.38 1.83.798 2.61.417.777.926 1.47 1.41 2.144.483.676.945 1.34 1.28 2.045.335.7.512 1.472.512 2.2 0 .91-.437 1.77-1.082 2.402C8.272 19.538 7.498 20 6 20zm13.003 1c1.668 0 2.792-.573 3.618-1.385.827-.812 1.38-1.942 1.38-3.115 0-.952-.225-1.825-.608-2.63-.383-.804-.883-1.515-1.37-2.198-.49-.682-.97-1.34-1.342-2.035-.372-.692-.677-1.4-.677-2.137 0-.947.273-1.953.884-2.677.32-.376-.078-.937-.553-.803-2.064.58-3.89 1.827-5.205 3.52-1.317 1.693-2.127 3.816-2.127 5.96 0 1.84.438 3.708 1.593 5.184C15.802 20.09 17.336 21 19.003 21zm0-1c-1.5 0-2.625-.907-3.62-1.933-.98-1.253-1.38-2.92-1.38-4.566 0-1.924.733-3.825 1.915-5.345.887-1.14 2.104-1.96 3.417-2.568-.234.62-.332 1.245-.332 1.913 0 .93.38 1.83.796 2.61.416.777.926 1.47 1.41 2.144.482.676.944 1.34 1.28 2.045.334.7.51 1.472.51 2.2 0 .906-.436 1.77-1.08 2.402-.646.636-1.418 1.098-2.917 1.098z" />
  </SvgIcon>
);

Quote.muiName = SvgIcon.muiName;
Quote.whyDidYouRender = true;

export default Quote;