import { useEffect } from 'react';

const TwitterPost = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <p lang="hi" dir="ltr">
        अपने कैम्प कार्यालय बूथ संख्या 206 पर मा० प्रधानमंत्री जी के 
        <a href="https://twitter.com/hashtag/%E0%A4%AE%E0%A4%A8_%E0%A4%95%E0%A5%80_%E0%A4%AC%E0%A4%BE%E0%A4%A4?src=hash&amp;ref_src=twsrc%5Etfw">#मन_की_बात</a> 
        कार्यक्रम कार्यकर्ताओं के साथ सुनते हुए।।
        <br />
        <a href="https://twitter.com/hashtag/%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A4%AF%E0%A4%B6%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A4%BE%E0%A4%B0%E0%A4%BF%E0%A4%82%E0%A4%95%E0%A5%81?src=hash&amp;ref_src=twsrc%5Etfw">#विजयशुक्लारिंकु</a> 
        <a href="https://twitter.com/hashtag/%E0%A4%9B%E0%A5%8B%E0%A4%9F%E0%A5%80_%E0%A4%95%E0%A4%BE%E0%A4%B7%E0%A5%80_%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A4%BE?src=hash&amp;ref_src=twsrc%5Etfw">#छोटी_काशी_गोला</a> 
        <a href="https://t.co/CIEjxPKaEv">pic.twitter.com/CIEjxPKaEv</a>
      </p>
      &mdash; Vijay Shukla Rinku (@RinkuShuklabjp) 
      <a href="https://twitter.com/RinkuShuklabjp/status/1827607477757571245?ref_src=twsrc%5Etfw">August 25, 2024</a>
    </blockquote>
  );
};

export default TwitterPost;
