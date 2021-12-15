import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import RadioButton from './components/RadioButton';
import ProductTags from './components/ProductTags';

const Container = styled.div`
  max-width: 24rem;
  margin: 20px 300px 50px 20px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  label {
    display: block;
    font-weight: bold;
  }
  input {
    padding: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;

const Article = styled.article`
border: 1px solid white;
width: 150px;
padding: 10px;
margin: 15px;
`

export default function App() {
  const initialProduct = {
    name: '',
    price: 0,
    isDecorated: false,
    colorName: '',
    category: '',
    packageSize: '',
    contactEmail: '',
    tags: [],
  };
  const [product, setProduct] = useState(initialProduct);

  const [products, setProducts] = useState([]);

  const categories = [
    'Drinks',
    'Food',
    'Sweet',
    'Adventskalender',
    'Souenir',
    'Alcohol'
  ];

  const handleChange = (event) => {
    let inputValue = event.target.value; // "Glühwein"

    if (event.target.type === 'checkbox') {
      inputValue = event.target.checked;
    }

    // if (event.target.name === 'price') { parseInt }

    setProduct({
      // alle bestehenden Properties behalten
      // neu zu setzende Property -> deren Wert überschreiben
      ...product,
      [event.target.name]: inputValue,
    });
  };

  function updateTags(newTag) {
    if (product.tags.includes(newTag)) {
      const newTags = product.tags.filter((oldTag) => oldTag !== newTag);
      setProduct({...product, tags: newTags})
    } else {
      setProduct({...product, tags: [...product.tags, newTag]});
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setProducts([...products, product]);
    setProduct(initialProduct);
  };

  return (
    <Container>
      <h2>Add a new product</h2>
      <Form onSubmit={handleSubmit}>
        <TextInput
          onTextInputChange={handleChange}
          name="name"
          value={product.name}
        >
          <h3>
            <span>Product Name</span>
          </h3>
        </TextInput>

        <TextInput 
        onTextInputChange={handleChange}
        name='colorName'
        placeholder='Add a color'>
          <h3>Color</h3>
        </TextInput>

        <InputRow>
          <div>
            <NumberInput
              name="price"
              value={product.price}
              onNumberInputChange={handleChange}
            >
              <h3>Price (in €)</h3>
            </NumberInput>
          </div>

          <Checkbox
            name="isDecorated"
            value={product.isDecorated}
            onCheckboxChange={handleChange}
          >
            Is decorated?
          </Checkbox>
        </InputRow>

        <Select
          name="category"
          value={product.category}
          options={categories}
          onSelectChange={handleChange}
        >
          Product Category
        </Select>

        <RadioButton value={product.packageSize} onRadioChange={handleChange}>
          <h3>Package Size</h3>
          <hr />
        </RadioButton>

        <TextInput
          name="contactEmail"
          value={product.contactEmail}
          onTextInputChange={handleChange}
          placeholder="Add your email …"
        >
          Contact Email
        </TextInput>

        <ProductTags label="Product Tags" tags={product.tags} onUpdateTags={updateTags} />

        <div>
          <button>Add Product</button>
          {/* Optional */}
          <button type="reset" onClick={() => setProduct(initialProduct)}>
            Reset
          </button>
        </div>
      </Form>

      {products.map((productItem) => (
        <Article>
          <h3>{productItem.name}</h3>
          <p>
          Category: {productItem.category} / {productItem.price} € 
          </p>
          <p>
            {productItem.packageSize} / {productItem.tags}
          </p>
        </Article>
      ))}
    </Container>
  );
}