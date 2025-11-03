import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { BackButton } from './BackButton';

describe('BackButton', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BackButton testID="back-button" />);
    expect(getByTestId('back-button')).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <BackButton testID="back-button" onPress={onPressMock} />
    );

    fireEvent.press(getByTestId("back-button"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});

