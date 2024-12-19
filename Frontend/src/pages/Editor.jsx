


import React, { useState, useEffect } from 'react';
import EditorNavbar from '../components/editornavbar';
import EditorX from '@monaco-editor/react';
import './editor.css';

const Editor = () => {
  const [tab, setTab] = useState("html");
  const [isLightMode, setIsLightMode] = useState(false);

  const changeTheme = () => {
    if (isLightMode) {
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

  useEffect(() => {
    console.log(tab);
  }, [tab]);

  const [htmlCode, setHtmlCode] = useState('<p>Hello World</p>');
  const [cssCode, setCssCode] = useState('body{background-color:black}');
  const [jsCode, setJsCode] = useState('console.log(2+2)');

  const run = () => {
    const html = htmlCode;
    const css = `<style>${cssCode}</style>`;
    const js = `<script>${jsCode}</script>`;
    const iframe = document.getElementById("iframe");

    if (iframe) {
      iframe.srcdoc = html + css + js;
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      run();
    }, 100);
    return () => clearTimeout(timeoutId); // Clear timeout if component unmounts or dependencies change
  }, [htmlCode, cssCode, jsCode]);

  const getEditorConfig = () => {
    switch (tab) {
      case 'html':
        return { language: 'html', value: htmlCode, onChange: (value) => setHtmlCode(value)   };
      case 'css':
        return { language: 'css', value: cssCode, onChange: (value) => setCssCode(value)  };
      case 'js':
        return { language: 'javascript', value: jsCode, onChange: (value) => setJsCode(value) };
      default:
        return { language: 'html', value: htmlCode, onChange: (value) => setHtmlCode(value) };
    }
  };

  const editorConfig = getEditorConfig();

  

  return (
    <div>
      <EditorNavbar />
      <div className='outer'>
        <div className='left'>
          <div className="conta">
            <div onClick={() => setTab("html")} className="tab">HTML</div>
            <div onClick={() => setTab("css")} className="tab">CSS</div>
            <div onClick={() => setTab("js")} className="tab">Javascript</div>
            <button onClick={changeTheme} className='tab'>Theme</button>
          </div>
          
          <EditorX
            
            key={tab}
            height="90vh"
            theme={isLightMode ? "vs-light" : "vs-dark"}
            language={editorConfig.language}
            value={editorConfig.value}
            onChange={editorConfig.onChange}

            
          />
        </div>
        <iframe id='iframe' className="out" title="output" />
      </div>
    </div>
  );
};

export default Editor;
