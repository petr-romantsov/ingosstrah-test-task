import './styles.css';
import { container, Container } from './components/Container/Container';
import { buttonsWrapper } from './components/ButtonsWrapper/ButtonsWrapper';

const root = document.getElementById('root');

container.appendToParent(root);
buttonsWrapper.appendToParent(root);
