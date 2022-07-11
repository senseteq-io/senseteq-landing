import Head from 'next/head'

const PageMeta = (props) => {
  const { title, description, keywords, author } = props

  return (
    <Head itemscope itemtype="http://schema.org/Organization">
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* <!-- Basic --> */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="title" content={title} />
      <meta name="image" content="/favicon.ico" />
      <meta name="theme-color" content="var(--primary)" />
      {author && <meta name="author" content={author} />}

      {/* <!-- Schema.org markup for Google+ --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      {/* <!-- Open Graph --> */}
      <meta property="og:site_name" content="Senseteq" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image:alt" content="Senseteq" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.pipedriveLeadboosterConfig = {
        base: 'leadbooster-chat.pipedrive.com',
        companyId: 10552104,playbookUuid: 'f467b8c0-118f-4e92-90de-213f5ac7c5e9',
        version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})();`
        }}
      />
      <script
        src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
        async
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('JMvZ8g0A90z72pOd'); `
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.VIDEOASK_EMBED_CONFIG = {
      "kind": "widget",
      "url": "https://www.videoask.com/fxat2tdbz",
      "options": {
        "widgetType": "VideoThumbnailSmall",
        "text": "",
        "backgroundColor": "#60DE74",
        "position": "bottom-left",
        "dismissable": true
      }
    }`
        }}
      />
      <script src="https://www.videoask.com/embed/embed.js" async></script>
    </Head>
  )
}

export default PageMeta
