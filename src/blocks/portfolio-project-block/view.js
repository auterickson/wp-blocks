import { createRoot } from 'react-dom/client';
import BlockApp from "./react-app/BlockApp.js";



// Render your React component instead
const blocks= document.querySelectorAll('.wp-block-ae-portfolio-project-block')

blocks.forEach(block => {
	createRoot(block).render(<BlockApp />);
});
