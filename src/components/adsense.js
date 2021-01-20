// FYI: https://31navi.com/gatsby-adsense
import React, { useEffect } from "react";
import { css } from "@emotion/react";  // need: @emotion/react FYI: https://blog.ojisan.io/s-c-kigo

const Adsense = ( { slot = "", format = "auto", layout = false, layoutKey = false, path } ) =>
{
  useEffect( () =>
  {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push( {} );
  }, [ path ] );

  const Style_adsense = css`
    /* overflow-x: scroll; windowをリサイズしたときに横幅はみ出る問題対策 */
    width: 100%;
  `;

  const client = process.env.GATSBY_ADSENSE

  return (
    <div css={ Style_adsense } key={ path }>
      {/* リンク広告orディスプレイ広告 */ }
      {!layout && !layoutKey &&
        <ins
          className="adsbygoogle"
          style={ { display: "block" } }
          data-ad-client={ client }
          data-ad-slot={ slot }
          data-ad-format={ format }
          data-full-width-responsive="true"
        ></ins>
      }
      {/* 記事内広告 */ }
      {!!layout &&
        <ins
          className="adsbygoogle"
          style={ { display: "block", textAlign: "center" } }
          data-ad-client={ client }
          data-ad-slot={ slot }
          data-ad-format={ format }
          data-ad-layout={ layout }
        ></ins>
      }
      {/* インフィード広告 */ }
      {!!layoutKey &&
        <ins
          className="adsbygoogle"
          style={ { display: "block", textAlign: "center" } }
          data-ad-client={ client }
          data-ad-slot={ slot }
          data-ad-format={ format }
          data-ad-layout-key={ layoutKey }
        ></ins>
      }
    </div>
  );
};

export default Adsense;
