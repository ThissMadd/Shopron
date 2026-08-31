'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { useLocale } from '@/context/LocaleContext';

export default function ShareMenu({ title }){
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);
  const [url, setUrl] = useState('');
  const { t } = useLocale();

  useEffect(() => {
    function onDocClick(){ setOpen(false); }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  function copyLink(){
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  async function handleShareClick(e){
    e.stopPropagation();
    const shareUrl = window.location.href;
    if(navigator.share){
      try { await navigator.share({ title, url: shareUrl }); }
      catch(err){ /* user cancelled the native share sheet — nothing to do */ }
      return;
    }
    setUrl(shareUrl);
    setOpen(o => !o);
  }

  return (
    <div className="share-wrap">
      <button className="share-btn" type="button" onClick={handleShareClick}>
        <Icon name="share" /> {t('share.share')}
      </button>
      <div ref={menuRef} className={`share-menu ${open ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
          <Icon name="facebook" /> {t('share.facebook')}
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
          <Icon name="twitter" /> {t('share.twitter')}
        </a>
        <a href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" /> {t('share.whatsapp')}
        </a>
        <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}>
          <Icon name="mail" /> {t('share.email')}
        </a>
        <button type="button" onClick={copyLink}>
          {copied ? <><Icon name="check" /> {t('share.copied')}</> : <><Icon name="link" /> {t('share.copy')}</>}
        </button>
      </div>
    </div>
  );
}
