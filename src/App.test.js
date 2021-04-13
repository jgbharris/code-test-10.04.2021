import { render, screen } from '@testing-library/react';
import { shallow, mount} from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />)
});

it('renders dogWrapper', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("dogWrapper"));
});

it('renders dogContainer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("dogContainer"));
});



