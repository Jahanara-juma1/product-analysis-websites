import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-orange-800	color: rgb(154 52 18) font-bold text-3xl">Question: what is contexe api?</h2>
            <p className='font-medium'><span className='font-bold text-orange-800	color: rgb(154 52 18)'>Answer:</span> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context.</p>

            <h3 className='text-orange-800	color: rgb(154 52 18) font-bold text-3xl'>Question: What is the different between inline element and inline block element?</h3>
            <p className='font-medium'><span className='text-orange-800	color: rgb(154 52 18) font-bold'>Answer: inline block element:</span>
: inline, the major difference is that display: inline-block allows to set a width and height on the element.

Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.
.<br />
<span className='text-orange-800	color: rgb(154 52 18) font-bold'>Inline Elements:</span> An inline element is the opposite of the block-level element. It does not start on a new line and takes up only the necessary width ie., it only occupies the space bounded by the tags defining the HTML element, instead of breaking the flow of the content.Inline elements: Inline elements occupy only enough width that is sufficient to it and allows other elements next to it which are inline.   </p>
        </div>
    );
};

export default Blogs;