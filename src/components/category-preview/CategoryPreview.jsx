import './category-preview.scss';
import ProductCard from '../product-card/ProductCard';
import { Link } from 'react-router-dom';

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <Link to={title}>
        <h2 className="title">{title.toUpperCase()}</h2>
      </Link>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
