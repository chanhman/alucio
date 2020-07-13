import Head from 'next/head'
import Nav from '../Nav'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>

    <Nav/>

    <main>{children}</main>

    <Footer/>

    <script
      dangerouslySetInnerHTML={{
        __html: `
      ;(function(o,l,a,r,k,y){if(o.olark)return; r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0]; y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r); y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)}; y.extend=function(i,j){y("extend",i,j)}; y.identify=function(i){y("identify",k.i=i)}; y.configure=function(i,j){y("configure",i,j);k.c[i]=j}; k=y._={s:[],t:[+new Date],c:{},l:a}; })(window,document,"static.olark.com/jsclient/loader.js");
      /* custom configuration goes here (www.olark.com/documentation) */
      olark.identify('9066-901-10-6140');
    `,
      }}
    />
  </>
)

export default Layout
