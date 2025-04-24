import { describe, expect, it } from 'vitest';
import ProductCard from './ProductCard';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
/* ==================================================================== */
/* 
Chú ý là code của bài học có lỗi. ProductCard component truyền vô là "product"
*/
describe('ProductCard component', () => {
  function setup(jsx) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  const testProduct = {
    // name={testProduct.name}
    // description={testProduct.description}

    product: {
      baseName: 'Test Product',
      baseDescription: 'Test product description',
      variants: [{ id: 'testId' }],
    },

    handleAddItemToCart: vi.fn((id) => id),
  };

  //
  it('includes an h2 containing "Test Product"', () => {
    render(
      <ProductCard
        // name={testProduct.name}
        // description={testProduct.description}
        product={testProduct.product}
      />
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      testProduct.product.baseName
    );
  });

  //
  it('button fires callback', async () => {
    const { user } = setup(
      <ProductCard
        product={testProduct.product}
        handleAddItemToCart={testProduct.handleAddItemToCart}
      />
    );

    await user.click(screen.getByRole('button'));

    expect(testProduct.handleAddItemToCart).toHaveBeenCalled();

    vi.clearAllMocks();
  });

  //
  it('callback returns product id', async () => {
    const { user } = setup(
      <ProductCard
        product={testProduct.product}
        handleAddItemToCart={testProduct.handleAddItemToCart}
      />
    );

    await user.click(screen.getByRole('button'));

    expect(testProduct.handleAddItemToCart).toHaveReturnedWith(
      testProduct.product.variants[0].id
    );

    vi.clearAllMocks();
  });
});
