import React from "react";
import { shallow } from "enzyme";
import Counter from "../../Components/Counter";


describe('Tests <Counter />', () => {

  let wrapper = shallow(<Counter/>);

  beforeEach(() => wrapper = shallow(<Counter/>));

  test('should show <Counter /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show the default value of 100', () => {
    const wrapper = shallow(<Counter value={ 100 }/>);
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('100');
  });

  test('must increase with the +1 button', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11');
  });

  test('must be decremented with the -1 button', () => {
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
  });

  test('must set the default value with the reset btn', () => {
    const wrapper = shallow(<Counter value={ 105 }/>);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('105');
  });

});
