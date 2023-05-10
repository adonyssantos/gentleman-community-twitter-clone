import { create, ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import { AppProvider } from '../src/providers/app.provider';

function toJson(component: ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as ReactTestRendererJSON;
}

describe('@universal-labs/primitives', () => {
  it('Should render AppProvider', () => {
    const component = create(<AppProvider children={undefined} />);
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
