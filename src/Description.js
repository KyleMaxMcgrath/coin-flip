import React from 'react';

const Description = ({count, heads, tails}) => (
    <div>Out of {count} flips, there have been {heads} heads and {tails} tails.</div>
);

export default Description;