import styled from 'styled-components';
import { useState } from 'react';

function ProductTags({ label, tags, onUpdateTags }) {
    const [tagInput, setTagInput] = useState('');

    const handleChange = (event) => {
        const tagInputValue = event.target.value;
        setTagInput(tagInputValue);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onUpdateTags(tagInput.toUpperCase());
            setTagInput('');
        }
    };

    return (
        <TagsContainer>
            <label htmlFor="tags">{label}</label>
            <TagsWrapper>
                {tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>
                        <span onClick={() => onUpdateTags(tag)}>{tag}</span>
                    </Tag>
                ))}

                <input
                    type="text"
                    id="tags"
                    name="tags"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a tag"
                    value={tagInput}
                />
            </TagsWrapper>
        </TagsContainer>
    );
}

export default ProductTags;


const TagsContainer = styled.section`
    display: block;
    text-align: center;
    label {
    font-weight: bold;
    }
  input {
    padding: 0.5rem 0.2rem;
    margin-top: 0.5rem;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 3px solid white;
  padding: 0.4rem;
  input {
   border: none;
  width: 30%;
  }
  input:focus{
    outline: none;
  }
`;

const Tag = styled.span`
  background: #241;
  border-radius: 0.3rem;
  color: #white;
  margin: 0.2rem;
  padding: 0.2rem 0.4rem 0.3rem;
`;

// {tags.sort().join(", ")}