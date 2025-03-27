import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function ClaudeRecipe({ recipe }) {
  return (
    <>
      {recipe && (
        <section className="max-w-[582px] mx-auto mt-5 flex flex-col gap-10">
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="text-gray-600 mt-3">{children}</p>,
              h2: ({ children }) => <h2 className="text-xl font-bold mt-5">{children}</h2>,
              ul: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal ml-5">{children}</ol>,
              li: ({ children }) => <li className="mt-1">{children}</li>,
            }}
          >
            {recipe}
          </ReactMarkdown>
        </section>
      )}
    </>
  );
}
