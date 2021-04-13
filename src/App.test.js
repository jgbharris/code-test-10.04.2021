import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, render } from 'enzyme';
import App from './App';


describe('<App />', () => {
  it('renders dogContainer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("dogPicture"));
  });
});



