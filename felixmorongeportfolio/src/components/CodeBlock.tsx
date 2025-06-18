import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';


interface CodeBlockProps {
  code: string;
  language?: Language;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'yaml' }) => {
  return (
    <Highlight {...defaultProps} code={code.trim()} language={language} theme={vsDark}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`code-block ${className}`}
          style={{
            ...style,
            padding: '1.5rem',
            overflowX: 'auto',
            borderRadius: '8px',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, j) => (
                <span key={j} {...getTokenProps({ token, key: j })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
