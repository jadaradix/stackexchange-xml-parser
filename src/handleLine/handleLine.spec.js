const {strict: assert} = require('assert')
const handleLine = require('./handleLine');

//
// HAPPY PATH
//

(() => {
  // GIVEN a <row line
  const line = `  <row Id="4" PostTypeId="1" AcceptedAnswerId="7" CreationDate="2008-07-31T21:42:52.667" Score="617" ViewCount="40863" Body="&lt;p&gt;I want to use a track-bar to change a form's opacit
  y.&lt;/p&gt;&#xA;&#xA;&lt;p&gt;This is my code:&lt;/p&gt;&#xA;&#xA;&lt;pre&gt;&lt;code&gt;decimal trans = trackBar1.Value / 5000;&#xA;this.Opacity = trans;&#xA;&lt;/code&gt;&lt;/pre&gt;
  &#xA;&#xA;&lt;p&gt;When I build the application, it gives the following error:&lt;/p&gt;&#xA;&#xA;&lt;blockquote&gt;&#xA;  &lt;p&gt;Cannot implicitly convert type &lt;code&gt;'decimal'&
  lt;/code&gt; to &lt;code&gt;'double'&lt;/code&gt;.&lt;/p&gt;&#xA;&lt;/blockquote&gt;&#xA;&#xA;&lt;p&gt;I tried using &lt;code&gt;trans&lt;/code&gt; and &lt;code&gt;double&lt;/code&gt; b
  ut then the control doesn't work. This code worked fine in a past VB.NET project.&lt;/p&gt;&#xA;" OwnerUserId="8" LastEditorUserId="6786713" LastEditorDisplayName="Rich B" LastEditDate=
  "2018-07-02T17:55:27.247" LastActivityDate="2019-01-17T13:39:48.937" Title="Convert Decimal to Double?" Tags="&lt;c#&gt;&lt;floating-point&gt;&lt;type-conversion&gt;&lt;double&gt;&lt;de
  cimal&gt;" AnswerCount="13" CommentCount="1" FavoriteCount="46" CommunityOwnedDate="2012-10-31T16:42:47.213" />`

  // WHEN it is handled
  const handledLine = handleLine(['Id', 'PostTypeId', 'CreationDate'], line)

  console.log('handledLine', handledLine)

  // THEN a map is returned with 3 key/value pairs
  assert(
    Array.from(handledLine.values()).length === 3
  )

  // AND a map is returned where the key is correct
  assert(
    Array.from(handledLine.keys())[2] === 'CreationDate'
  )

  // AND a map is returned where the first value is the key's value
  assert(
    Array.from(handledLine.values())[2] === '2008-07-31T21:42:52.667'
  )
})();
