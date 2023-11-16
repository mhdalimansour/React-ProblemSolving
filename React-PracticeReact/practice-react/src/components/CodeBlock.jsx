import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
function CodeBlock({ fileName }) {
  const [code, setCode] = useState("");
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await fetch(fileName);
        const temp = await response.text();
        setCode(temp);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCode();
  }, [fileName]);

  const codeTagProps = {
    style: {
      fontFamily: "Fira code",
    },
  };

  const handleCopy = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div>
      <SyntaxHighlighter
        style={duotoneDark}
        language="javascript"
        codeTagProps={codeTagProps}
      >
        {code}
      </SyntaxHighlighter>

      <CopyToClipboard text={code} onCopy={handleCopy}>
        <Button variant="secondary">
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </Button>
      </CopyToClipboard>
    </div>
  );
}
export default CodeBlock;
