import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useTheme } from '@/components/ThemeProvider';
import twTheme from '@/lib/theme';

// Renders a code block with syntax highlighting.
const CodeHighlighter = ({
  children,
  highlightedLines = [],
  language = 'jsx',
  title,
}) => {
  const { theme } = useTheme();

  return (
    <div className='syntax-highlight'>
      {title && <div className='text-muted-foreground'>{title}</div>}
      <SyntaxHighlighter
        language={language}
        style={theme === 'dark' ? atomDark : oneLight}
        wrapLines
        showLineNumbers
        lineProps={(lineNumber) => {
          let style = { display: 'block' };
          if (highlightedLines.includes(lineNumber)) {
            style.backgroundColor =
              theme === 'dark'
                ? twTheme.colors.zinc[700]
                : twTheme.colors.zinc[200];
          }
          return { style };
        }}
        lineNumberStyle={{ display: 'none' }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
