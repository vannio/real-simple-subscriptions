import transformXML, { transformNodes, xmlToNodes } from '../transformXML';
import fs from 'fs';

describe('transformNodes', () => {
  it('transforms an array of BBC nodes', () => {
    const xml = fs.readFileSync(__dirname + '/xml/bbc.xml', 'utf8');
    const expected = [
      {
        id: 'ecd0b633-ab19-5e9e-9d73-1ead9e040757',
        url: 'http://www.bbc.co.uk/news/uk-northern-ireland-40819687',
        date: 'Fri, 04 Aug 2017 11:31:30 GMT',
      },
      {
        id: 'beec47c6-c895-53a7-be78-e977727f6063',
        url: 'http://www.bbc.co.uk/news/world-middle-east-40822027',
        date: 'Thu, 03 Aug 2017 23:16:01 GMT',
      },
      {
        id: 'ce6e87ce-2d8d-5702-9120-d6a1f94ea29e',
        url: 'http://www.bbc.co.uk/news/uk-40824027',
        date: 'Fri, 04 Aug 2017 12:18:38 GMT',
      },
      {
        id: '383a1548-9432-53a9-b52f-d7ead3d02a08',
        url: 'http://www.bbc.co.uk/news/world-australia-40822310',
        date: 'Fri, 04 Aug 2017 08:23:47 GMT',
      },
      {
        id: 'f714fb2a-272f-5249-9715-ade6602d1c62',
        url: 'http://www.bbc.co.uk/news/world-europe-40824819',
        date: 'Fri, 04 Aug 2017 10:44:05 GMT',
      },
      {
        id: '44c6eb40-dc0a-5338-b5a1-d551859d3b9d',
        url: 'http://www.bbc.co.uk/news/uk-40821915',
        date: 'Fri, 04 Aug 2017 01:07:20 GMT',
      },
      {
        id: 'e06dc542-35e4-5d10-baf3-a94583cbd1f7',
        url: 'http://www.bbc.co.uk/news/business-40823239',
        date: 'Fri, 04 Aug 2017 11:12:22 GMT',
      },
      {
        id: '3968c5d2-a2dc-5e3d-af97-137bd058b264',
        url: 'http://www.bbc.co.uk/news/world-us-canada-40820863',
        date: 'Fri, 04 Aug 2017 08:39:01 GMT',
      },
      {
        id: 'e7aacd05-2c53-5efc-a57d-7411adab0c36',
        url: 'http://www.bbc.co.uk/news/entertainment-arts-40824357',
        date: 'Fri, 04 Aug 2017 08:40:21 GMT',
      },
      {
        id: 'a031692c-57a7-5f09-ba62-2e9b754ad001',
        url: 'http://www.bbc.co.uk/news/world-us-canada-40822409',
        date: 'Thu, 03 Aug 2017 22:25:15 GMT',
      },
      {
        id: '326b55c7-9bac-5132-b168-e4a9a971e9f3',
        url: 'http://www.bbc.co.uk/news/world-africa-40824267',
        date: 'Fri, 04 Aug 2017 10:54:54 GMT',
      },
      {
        id: '98831b91-d27f-51cf-a40f-40ca8034f701',
        url: 'http://www.bbc.co.uk/news/world-asia-40822755',
        date: 'Fri, 04 Aug 2017 07:10:01 GMT',
      },
      {
        id: '8df7882d-2798-5bad-a425-6c219229a9c7',
        url: 'http://www.bbc.co.uk/news/in-pictures-40722805',
        date: 'Fri, 04 Aug 2017 01:14:25 GMT',
      },
      {
        id: '8521814b-e7f9-50d4-a720-7620ce37b393',
        url: 'http://www.bbc.co.uk/news/uk-40814599',
        date: 'Fri, 04 Aug 2017 01:16:29 GMT',
      },
      {
        id: '2bd3771c-c09f-5644-9f9a-a6e966e08b39',
        url: 'http://www.bbc.co.uk/news/health-40822018',
        date: 'Thu, 03 Aug 2017 20:47:44 GMT',
      },
      {
        id: '0e5b8523-0b41-5fb0-b0ca-d8fa22cde763',
        url: 'http://www.bbc.co.uk/news/magazine-40819577',
        date: 'Fri, 04 Aug 2017 01:15:05 GMT',
      },
      {
        id: '19b0a758-08ab-530a-879d-7b358962cb97',
        url: 'http://www.bbc.co.uk/news/business-40808157',
        date: 'Fri, 04 Aug 2017 11:22:18 GMT',
      },
      {
        id: '768a74ea-baae-5fa5-ac28-316b91f4b71d',
        url: 'http://www.bbc.co.uk/news/blogs-the-papers-40821898',
        date: 'Fri, 04 Aug 2017 04:52:34 GMT',
      },
      {
        id: 'ca3536e8-7e08-5ef3-9e13-b5bf081950fe',
        url: 'http://www.bbc.co.uk/news/technology-40812080',
        date: 'Thu, 03 Aug 2017 23:33:53 GMT',
      },
      {
        id: '84f75ab8-2d13-59f3-a55f-291cfb906f33',
        url: 'http://www.bbc.co.uk/news/uk-england-manchester-40821288',
        date: 'Thu, 03 Aug 2017 20:47:41 GMT',
      },
      {
        id: '00452f2b-ba18-5793-b8ba-2d12a39a54bf',
        url: 'http://www.bbc.co.uk/news/10318089',
        date: 'Fri, 17 Feb 2017 09:41:12 GMT',
      },
      {
        id: '01c67949-174f-5ed8-8580-bc92171aa1f1',
        url: 'http://www.bbc.co.uk/news/magazine-40742586',
        date: 'Fri, 04 Aug 2017 01:18:23 GMT',
      },
      {
        id: '98174140-9f61-5be5-a49c-525ad002ab0b',
        url: 'http://www.bbc.co.uk/news/world-us-canada-40806586',
        date: 'Thu, 03 Aug 2017 23:33:18 GMT',
      },
      {
        id: '4f9faecc-43f3-5a59-a7cf-a3a97c96ca43',
        url: 'http://www.bbc.co.uk/news/world-asia-india-40749476',
        date: 'Thu, 03 Aug 2017 23:28:18 GMT',
      },
      {
        id: 'cb2b9fe0-a52d-502b-ab0e-7fe6668a4a20',
        url: 'http://www.bbc.co.uk/news/world-us-canada-40756948',
        date: 'Thu, 03 Aug 2017 23:07:43 GMT',
      },
      {
        id: 'c192cbe0-a5bc-521c-87f8-618a8f5e0fd6',
        url: 'http://www.bbc.co.uk/news/world-africa-40815064',
        date: 'Thu, 03 Aug 2017 23:31:19 GMT',
      },
      {
        id: '23af5d7a-35f6-5c3c-8d0c-09315af60be7',
        url: 'http://www.bbc.co.uk/news/business-40814333',
        date: 'Thu, 03 Aug 2017 13:35:05 GMT',
      },
      {
        id: '5427de7d-21ad-5952-98bb-65445c79dc75',
        url: 'http://www.bbc.co.uk/sport/football/40826201',
        date: 'Fri, 04 Aug 2017 11:21:09 GMT',
      },
      {
        id: '30b91112-20dd-5c40-b88c-04a36996c6c7',
        url: 'http://www.bbc.co.uk/sport/athletics/40825975',
        date: 'Fri, 04 Aug 2017 10:32:52 GMT',
      },
      {
        id: 'e7f687e3-8d40-5f88-aae9-e01df8fdea2a',
        url: 'http://www.bbc.co.uk/sport/cricket/40826613',
        date: 'Fri, 04 Aug 2017 12:06:56 GMT',
      },
      {
        id: '170d4ef1-8692-5e23-9993-3fd6869ab6e5',
        url: 'http://www.bbc.co.uk/sport/football/40827104',
        date: 'Fri, 04 Aug 2017 12:37:48 GMT',
      },
      {
        id: '1f50bc41-f9ed-57d9-8623-b77e95e9acce',
        url: 'http://www.bbc.co.uk/sport/athletics/40795800',
        date: 'Wed, 02 Aug 2017 06:22:04 GMT',
      },
      {
        id: '99e64f19-df0f-56f1-ac31-b199e8c270da',
        url: 'http://www.bbc.co.uk/sport/cricket/40828318',
        date: 'Fri, 04 Aug 2017 12:15:13 GMT',
      },
    ];

    expect(transformXML(xml)).toEqual(expected);
  });

  it('transforms an array of reddit nodes', () => {
    const xml = fs.readFileSync(__dirname + '/xml/reddit.xml', 'utf8');
    const expected = [
      {
        id: 'ca2c6ef0-09eb-539b-9ac5-b41c5cb98bf2',
        url:
          'https://www.reddit.com/r/programming/comments/6rg0pj/fbi_arrests_wannacry_hero_marcus_hutchins_in_las/',
        title:
          'FBI arrests WannaCry hero Marcus Hutchins in Las Vegas over malware claims',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/feduzzo"> /u/feduzzo </a> &#32; to &#32; <a href="https://www.reddit.com/r/programming/"> r/programming </a> <br/> <span><a href="http://www.telegraph.co.uk/technology/2017/08/03/fbi-arrests-wannacry-hero-marcus-hutchins-las-vegas-reports/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/programming/comments/6rg0pj/fbi_arrests_wannacry_hero_marcus_hutchins_in_las/">[comments]</a></span>\n    ',
        date: '2017-08-03T22:19:11+00:00',
      },
      {
        id: '56e7be66-8c35-57eb-b157-f3c5d31b07fa',
        url:
          'https://www.reddit.com/r/webdev/comments/6rjoaw/i_created_a_small_cli_tool_that_generates_html/',
        title:
          'I created a small CLI tool that generates HTML boilerplate files.',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/webdev/comments/6rjoaw/i_created_a_small_cli_tool_that_generates_html/"> <img src="https://a.thumbs.redditmedia.com/LlwA78A3s2tt2X0j7238ETYYqgZG3fNCJVpcnnGmZ58.jpg" alt="I created a small CLI tool that generates HTML boilerplate files." title="I created a small CLI tool that generates HTML boilerplate files." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/topherlicious"> /u/topherlicious </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://github.com/christopherwk210/html-primer">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/6rjoaw/i_created_a_small_cli_tool_that_generates_html/">[comments]</a></span> </td></tr></table>\n    ',
        date: '2017-08-04T10:49:28+00:00',
      },
      {
        id: '1dc9a4b2-612b-590c-a1fa-673e87f3081b',
        url:
          'https://www.reddit.com/r/javascript/comments/6rk45p/javascript_developers_are_competing_to_build/',
        title:
          'JavaScript developers are competing to build games in under 13kb',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/brunnock"> /u/brunnock </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://thenextweb.com/dd/2017/07/31/javascript-developers-competing-build-games-13kb/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rk45p/javascript_developers_are_competing_to_build/">[comments]</a></span>\n    ',
        date: '2017-08-04T12:24:09+00:00',
      },
      {
        id: '11525341-6ecc-5b0f-9dcf-f6071a1bd9a8',
        url:
          'https://www.reddit.com/r/golang/comments/6riahm/kubernetes_on_digital_ocean_with_private/',
        title:
          'Kubernetes on Digital Ocean with private encrypted VPN mesh with Kubicorn',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/kris-nova"> /u/kris-nova </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.nivenly.com/kubernetes-on-digital-ocean-with-encrypted-vpn-service-mesh/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/6riahm/kubernetes_on_digital_ocean_with_private/">[comments]</a></span>\n    ',
        date: '2017-08-04T04:55:21+00:00',
      },
      {
        id: 'e69f3e62-2a0a-515e-9631-47c7eb7b500b',
        url:
          'https://www.reddit.com/r/javascript/comments/6riti5/thought_you_guys_might_like_this/',
        title: 'thought you guys might like this',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/snuggles91"> /u/snuggles91 </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://xkcd.com/221/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6riti5/thought_you_guys_might_like_this/">[comments]</a></span>\n    ',
        date: '2017-08-04T07:01:32+00:00',
      },
      {
        id: 'a80e85c2-80f0-5b04-844e-1a3cc4926678',
        url:
          'https://www.reddit.com/r/golang/comments/6ripqh/nano_a_game_server_network_library_that_was/',
        title: 'nano: A game server network library that was written with Go',
        content:
          '<!-- SC_OFF --><div class="md"><p>Hi, all</p> <p>I used Go to write a game server network library, the transport layer supports TCP and WebSocket, it is very easy to use, the initial inspiration comes from Pomelo(<a href="https://github.com/NetEase/pomelo/">https://github.com/NetEase/pomelo/</a>) but some difference, I conducted a rough benchmark test, IOPS 10W+ on my computer(Windows10, i5-6700, 3.2GHz 4Core), I need someone help me review it, some advice is better.</p> <p>Thanks</p> <p>PS: <a href="https://github.com/lonnng/nano">https://github.com/lonnng/nano</a></p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/longtaitou"> /u/longtaitou </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.reddit.com/r/golang/comments/6ripqh/nano_a_game_server_network_library_that_was/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/6ripqh/nano_a_game_server_network_library_that_was/">[comments]</a></span>\n    ',
        date: '2017-08-04T06:34:52+00:00',
      },
      {
        id: '3cdc828e-1ae8-58de-afb0-0719301c3611',
        url:
          'https://www.reddit.com/r/javascript/comments/6rja18/flow_v052_includes_flowlint_an_inbuilt_linter/',
        title: 'Flow v0.52 includes flowlint – an inbuilt linter',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/gajus0"> /u/gajus0 </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://flow.org/en/docs/linting/flowlint-comments/#flowlint-a-classtoc-idtoc-flowlint-hreftoc-flowlinta">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rja18/flow_v052_includes_flowlint_an_inbuilt_linter/">[comments]</a></span>\n    ',
        date: '2017-08-04T09:05:38+00:00',
      },
      {
        id: '724d2e9a-e4bc-5a85-bf31-7c82f36e8ee8',
        url:
          'https://www.reddit.com/r/javascript/comments/6rjkyh/a_decent_alternative_of_jsperf_that_supports_npm/',
        title: 'A decent alternative of JSPerf that supports NPM modules',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/alshakero"> /u/alshakero </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://perf.zone/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rjkyh/a_decent_alternative_of_jsperf_that_supports_npm/">[comments]</a></span>\n    ',
        date: '2017-08-04T10:26:03+00:00',
      },
      {
        id: '75e7b47a-c3c8-5395-b0b6-3363eae71a8e',
        url:
          'https://www.reddit.com/r/javascript/comments/6re0sf/will_plain_vanilla_javascript_make_a_comeback/',
        title: 'Will Plain "Vanilla" JavaScript make a comeback?',
        content:
          '<!-- SC_OFF --><div class="md"><p>This is probably a stupid question, but do you think that plain JavaScript (aka Vanilla - hate to use that term) will ever make a comeback and developers will start making a move away from all the frameworks and extra &quot;stuff&quot; used along with frameworks? </p> <p>Will we adopt a &quot;less is more&quot; mentality?</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/spacemonkeyapps"> /u/spacemonkeyapps </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.reddit.com/r/javascript/comments/6re0sf/will_plain_vanilla_javascript_make_a_comeback/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6re0sf/will_plain_vanilla_javascript_make_a_comeback/">[comments]</a></span>\n    ',
        date: '2017-08-03T17:44:00+00:00',
      },
      {
        id: 'eb7409b2-3b80-5bb1-b5da-532fa2820e09',
        url:
          'https://www.reddit.com/r/golang/comments/6rjb54/is_there_anyway_to_limit_the_amount_of_metadata/',
        title:
          'Is there anyway to limit the amount of metadata go adds to your binary?',
        content:
          '<!-- SC_OFF --><div class="md"><p>I was poking around a go binary today and I found that go seems to add a lot of information about my computer and location to binaries.</p> <p>For example I found my username (From my gopath and from paths to various .go files), computer name (Again gopath), country (From a line about locale not existing) and my OS (from the format of my gopath). I found all this in just a few minutes of greping the binary</p> <p>I&#39;ve started to use sed to strip out most of this information and changed my gopath to one that doesn&#39;t include my computer name or username but I was wondering if there&#39;s anyway to stop this kind of information from being added to the binary in the first place or to otherwise easily limit what strings end up in the end binary</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/ineedmorealts"> /u/ineedmorealts </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.reddit.com/r/golang/comments/6rjb54/is_there_anyway_to_limit_the_amount_of_metadata/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/6rjb54/is_there_anyway_to_limit_the_amount_of_metadata/">[comments]</a></span>\n    ',
        date: '2017-08-04T09:14:10+00:00',
      },
      {
        id: 'c92411ab-720c-536b-a4a6-c4dbf3167c19',
        url:
          'https://www.reddit.com/r/javascript/comments/6rj4zb/is_long_pulling_still_a_thing/',
        title: 'Is long pulling still a thing?',
        content:
          '<!-- SC_OFF --><div class="md"><p>hey,</p> <p>I&#39;m still learning javascript and a new task that I have is to check in my web application if a value in my db has changed.</p> <p>If it has changed I should do something with it.</p> <p>I read something about Comet Techniques, which includes streaming and long pulling. Is there a better or easier way to do it? </p> <p>My web app is made with jQuery and foundation.js</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/oppoi"> /u/oppoi </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.reddit.com/r/javascript/comments/6rj4zb/is_long_pulling_still_a_thing/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rj4zb/is_long_pulling_still_a_thing/">[comments]</a></span>\n    ',
        date: '2017-08-04T08:26:48+00:00',
      },
      {
        id: '5dbea215-1e3f-5008-8a55-2cc80f6dec05',
        url:
          'https://www.reddit.com/r/webdev/comments/6rd48q/how_do_i_get_rid_of_the_stock_prediction_in/',
        title:
          'How do I get rid of the stock prediction in visual studio code? the first choice does nothing but the second one is html snippets which is the extension that I want.',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/webdev/comments/6rd48q/how_do_i_get_rid_of_the_stock_prediction_in/"> <img src="https://b.thumbs.redditmedia.com/7X04sXE6ixf5a5L6eXqY-zZ18ccScXoUaIPpMU_J3pI.jpg" alt="How do I get rid of the stock prediction in visual studio code? the first choice does nothing but the second one is html snippets which is the extension that I want." title="How do I get rid of the stock prediction in visual studio code? the first choice does nothing but the second one is html snippets which is the extension that I want." /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/Hustlean"> /u/Hustlean </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://i.redd.it/egf1z4sqljdz.png">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/6rd48q/how_do_i_get_rid_of_the_stock_prediction_in/">[comments]</a></span> </td></tr></table>\n    ',
        date: '2017-08-03T15:39:35+00:00',
      },
      {
        id: '870ebffb-80c2-5480-bf9c-e4b87a353171',
        url:
          'https://www.reddit.com/r/golang/comments/6rj4dj/cpio_go_native_implementation_of_the_cpio_archive/',
        title: 'cpio: Go native implementation of the CPIO archive file format',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/cavaliercoder"> /u/cavaliercoder </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://github.com/cavaliercoder/go-cpio">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/6rj4dj/cpio_go_native_implementation_of_the_cpio_archive/">[comments]</a></span>\n    ',
        date: '2017-08-04T08:22:07+00:00',
      },
      {
        id: '55b7bd2e-4c42-501c-ad21-d9ab5ecbac36',
        url:
          'https://www.reddit.com/r/webdev/comments/6rg3h6/my_first_react_native_app_gitpoint_an_open_source/',
        title:
          'My first React Native app (GitPoint - an open source GitHub client) is now on the App Store and Google Play!',
        content:
          '<table> <tr><td> <a href="https://www.reddit.com/r/webdev/comments/6rg3h6/my_first_react_native_app_gitpoint_an_open_source/"> <img src="https://b.thumbs.redditmedia.com/XUTKXwfstSc8nE4klt4xLuf3rt_WoXMMPfl6tqasEfo.jpg" alt="My first React Native app (GitPoint - an open source GitHub client) is now on the App Store and Google Play!" title="My first React Native app (GitPoint - an open source GitHub client) is now on the App Store and Google Play!" /> </a> </td><td> &#32; submitted by &#32; <a href="https://www.reddit.com/user/CallMeAwesomeSauce"> /u/CallMeAwesomeSauce </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://github.com/gitpoint/git-point">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/6rg3h6/my_first_react_native_app_gitpoint_an_open_source/">[comments]</a></span> </td></tr></table>\n    ',
        date: '2017-08-03T22:30:55+00:00',
      },
      {
        id: '0bd48d98-0503-52c9-8ea8-4e38ea795bda',
        url:
          'https://www.reddit.com/r/javascript/comments/6rijtv/nodejs_streams_everything_you_need_to_know/',
        title: 'Node.js Streams: Everything you need to know',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/fagnerbrack"> /u/fagnerbrack </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rijtv/nodejs_streams_everything_you_need_to_know/">[comments]</a></span>\n    ',
        date: '2017-08-04T05:54:55+00:00',
      },
      {
        id: 'bb5f401f-3bea-5f73-805b-8b833346f0b4',
        url:
          'https://www.reddit.com/r/javascript/comments/6ridp1/good_example_of_keeping_down_bundle_size_by_good/',
        title:
          'Good example of keeping down bundle size by good use of imports and modules',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/fullstackdelivery"> /u/fullstackdelivery </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.bennadel.com/blog/3314-aggregating-cherry-picked-lodash-methods-in-an-application-module-in-javascript.htm">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6ridp1/good_example_of_keeping_down_bundle_size_by_good/">[comments]</a></span>\n    ',
        date: '2017-08-04T05:14:21+00:00',
      },
      {
        id: '52794af6-636b-56f8-873c-b876f2f76b47',
        url:
          'https://www.reddit.com/r/golang/comments/6rfvbk/godzilla_a_javascript_to_go_source_code/',
        title:
          'Godzilla: a JavaScript to Go source code transpiler and runtime',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/jingweno"> /u/jingweno </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://owenou.com/me-at-gophercon-2017">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/6rfvbk/godzilla_a_javascript_to_go_source_code/">[comments]</a></span>\n    ',
        date: '2017-08-03T21:58:12+00:00',
      },
      {
        id: '9404f14f-86a9-567d-8dae-0c9204f64a93',
        url:
          'https://www.reddit.com/r/javascript/comments/6rj8df/extractyamlfrommarkdownplugin/',
        title: 'Extract-Yaml-From-Markdown-Plugin',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/jrainlau"> /u/jrainlau </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://github.com/jrainlau/extract-yaml-from-markdown-plugin">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rj8df/extractyamlfrommarkdownplugin/">[comments]</a></span>\n    ',
        date: '2017-08-04T08:53:27+00:00',
      },
      {
        id: '00467a0f-17e1-5219-a0bb-9d673a54d81f',
        url:
          'https://www.reddit.com/r/webdev/comments/6rj0ks/what_are_the_best_resources_available_to_learn/',
        title: 'What are the best resources available to learn regex?',
        content:
          '<!-- SC_OFF --><div class="md"><p>I feel it&#39;s time I conquer regular expressions once and for all - what did you use to learn all about them, <a href="/r/webdev">/r/webdev</a>?</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/brexitbulldog"> /u/brexitbulldog </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://www.reddit.com/r/webdev/comments/6rj0ks/what_are_the_best_resources_available_to_learn/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/6rj0ks/what_are_the_best_resources_available_to_learn/">[comments]</a></span>\n    ',
        date: '2017-08-04T07:52:38+00:00',
      },
      {
        id: 'c946876f-358a-5718-b062-d43ad149b01c',
        url:
          'https://www.reddit.com/r/javascript/comments/6rfh0j/who_else_love_to_watch_npm_installation_progress/',
        title:
          'Who else love to watch npm installation progress? I made it to loop forever.',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/mburakerman"> /u/mburakerman </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://codepen.io/mburakerman/full/wqoBeE/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rfh0j/who_else_love_to_watch_npm_installation_progress/">[comments]</a></span>\n    ',
        date: '2017-08-03T21:02:19+00:00',
      },
      {
        id: 'd29096f2-6732-5452-a6bc-9966b2ce1951',
        url: 'https://www.reddit.com/r/webdev/comments/6rjsxp/bootstrap_4/',
        title: 'BootStrap 4',
        content:
          '<!-- SC_OFF --><div class="md"><p>I&#39;m almost finished a bootstrap course, but realised there was a new version of bootstrap (bootstrap 4) and some of the features of the previous version did not translate to it directly. </p> <p>Looking online, documentation and resources for bootstrap 4 are quite lacking. </p> <p>I want to finish building my website by making it more responsive and modern with bootstrap, do you guys think I should just go ahead and do it now or learn the latest version of bootstrap?</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/idigress1337"> /u/idigress1337 </a> &#32; to &#32; <a href="https://www.reddit.com/r/webdev/"> r/webdev </a> <br/> <span><a href="https://www.reddit.com/r/webdev/comments/6rjsxp/bootstrap_4/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/webdev/comments/6rjsxp/bootstrap_4/">[comments]</a></span>\n    ',
        date: '2017-08-04T11:20:05+00:00',
      },
      {
        id: '9fff84d1-5946-5a9d-92f3-02a5d77b88d2',
        url:
          'https://www.reddit.com/r/golang/comments/6rj263/why_all_logger_dont_log_the_request_body/',
        title: "Why all logger don't log the request body",
        content:
          '<!-- SC_OFF --><div class="md"><p>I have surfing many web framework, many of them provide a logger middleware to log http method, url and time, but none of then log the url values or body. In my opinion, if something wrong, the url doesn&#39;t matter, but the body can offer the info the help us debug.</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/nlimpid"> /u/nlimpid </a> &#32; to &#32; <a href="https://www.reddit.com/r/golang/"> r/golang </a> <br/> <span><a href="https://www.reddit.com/r/golang/comments/6rj263/why_all_logger_dont_log_the_request_body/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/golang/comments/6rj263/why_all_logger_dont_log_the_request_body/">[comments]</a></span>\n    ',
        date: '2017-08-04T08:04:42+00:00',
      },
      {
        id: '6dc8cac8-b26c-5d52-b4f8-b9b3c71e3672',
        url:
          'https://www.reddit.com/r/programming/comments/6rbq8c/npm_package_is_stealing_env_variables/',
        title: 'npm package is stealing env variables',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/haaaff"> /u/haaaff </a> &#32; to &#32; <a href="https://www.reddit.com/r/programming/"> r/programming </a> <br/> <span><a href="https://twitter.com/o_cee/status/892306836199800836">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/programming/comments/6rbq8c/npm_package_is_stealing_env_variables/">[comments]</a></span>\n    ',
        date: '2017-08-03T11:46:50+00:00',
      },
      {
        id: 'a7820bf9-def6-5087-aac5-44ac0723450e',
        url:
          'https://www.reddit.com/r/programming/comments/6rjtca/tron_legacy_boardroom_projection_recreated_in/',
        title:
          'Tron Legacy Boardroom Projection recreated in HTML5 (Github source in comments)',
        content:
          '&#32; submitted by &#32; <a href="https://www.reddit.com/user/DanteShamest"> /u/DanteShamest </a> &#32; to &#32; <a href="https://www.reddit.com/r/programming/"> r/programming </a> <br/> <span><a href="https://www.robscanlon.com/encom-boardroom/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/programming/comments/6rjtca/tron_legacy_boardroom_projection_recreated_in/">[comments]</a></span>\n    ',
        date: '2017-08-04T11:22:46+00:00',
      },
      {
        id: '8ca49be4-a1b4-5068-95bf-6c531b52bb38',
        url:
          'https://www.reddit.com/r/javascript/comments/6rk2sz/how_can_i_use_webpack_for_this/',
        title: 'How can I use webpack for this.',
        content:
          '<!-- SC_OFF --><div class="md"><p>this is the HTML file</p> <pre><code>&lt;html&gt; &lt;script src=&quot;bundle.js&quot;&gt;&lt;/script&gt; &lt;head&gt; &lt;body&gt; &lt;button onClick=&quot;writeTo&quot;&gt;&lt;/button&gt; &lt;/body&gt; &lt;/html&gt; </code></pre> <p>This is the entry file.</p> <pre><code> function writeTo(){ console.log(&quot; it works&quot;) } </code></pre> <p>When I cilick the button I get &quot;writeTo() is not defined&quot;</p> </div><!-- SC_ON --> &#32; submitted by &#32; <a href="https://www.reddit.com/user/petar02"> /u/petar02 </a> &#32; to &#32; <a href="https://www.reddit.com/r/javascript/"> r/javascript </a> <br/> <span><a href="https://www.reddit.com/r/javascript/comments/6rk2sz/how_can_i_use_webpack_for_this/">[link]</a></span> &#32; <span><a href="https://www.reddit.com/r/javascript/comments/6rk2sz/how_can_i_use_webpack_for_this/">[comments]</a></span>\n    ',
        date: '2017-08-04T12:16:28+00:00',
      },
    ];

    expect(transformXML(xml)).toEqual(expected);
  });

  it('transforms an array of Techradar nodes', () => {
    const xml = fs.readFileSync(__dirname + '/xml/techradar.rss', 'utf8');
    const expected = [
      {
        id: '2a649f3a-b759-56bd-afc7-922a0ec85334',
        url: 'http://www.techradar.com/news/the-best-free-media-player',
        title: 'The best free media player 2017',
        description:
          'Whether you want to enjoy some music, catch up on your favorite TV shows or sit back with a film, these free players will ensure you get the best picture and sound quality your PC can deliver.',
        date: 'Fri, 04 Aug 2017 12:00:00 +0000',
      },
      {
        id: '54a259fc-fb6e-5a25-a9a0-a544dab6f85b',
        url:
          'http://www.techradar.com/news/wannacry-hero-has-been-arrested-on-malware-charges',
        title: 'WannaCry ‘hero’ has been arrested on malware charges',
        description:
          'The cyber expert responsible for stopping the WannaCry malware attack on the NHS has been arrested in America.',
        date: 'Fri, 04 Aug 2017 11:53:35 +0000',
      },
      {
        id: 'c0bdb0e0-f461-5ab1-a05e-9e132d569488',
        url:
          'http://www.techradar.com/news/free-bt-sport-for-a-year-with-bt-broadband-deals-for-a-limited-time-only',
        title:
          'Free BT Sport for a year with BT Broadband deals, for a limited time only',
        description:
          'BT is offering a very tempting broadband deal for football fans awaiting the start of the Premier League season',
        date: 'Fri, 04 Aug 2017 11:30:45 +0000',
      },
      {
        id: 'cf6c334e-28ea-5dd8-aaed-7c97abe0272f',
        url: 'http://www.techradar.com/news/virgin-broadband-deals',
        title: 'The best Virgin broadband deals in August 2017',
        description:
          'Find out if Virgin broadband is available in your area - and how much it costs to buy...',
        date: 'Fri, 04 Aug 2017 11:30:21 +0000',
      },
      {
        id: '9afee2f6-7041-560e-8cd2-eba4dc58dbb6',
        url:
          'http://www.techradar.com/news/television/best-netflix-series-25-great-netflix-tv-shows-1287333',
        title:
          'Best shows on Netflix (August 2017): 50 great Netflix TV series',
        description:
          'Make sure you are getting the best out of your account with the best Netflix TV series available.',
        date: 'Fri, 04 Aug 2017 11:17:00 +0000',
      },
      {
        id: '215c6230-bca8-53e3-ad66-96ea89e1c1a0',
        url: 'http://www.techradar.com/news/broadband-only-deals',
        title: 'The best cheap broadband only deals in August 2017',
        description:
          "If you're simply looking for the cheapest broadband deals, we'll show you the best prices for broadband only plans.",
        date: 'Fri, 04 Aug 2017 11:15:03 +0000',
      },
      {
        id: '053b6008-e1e8-5b56-b79e-d533c74508d3',
        url: 'http://www.techradar.com/news/bt-broadband-deals',
        title: 'The best BT broadband and Infinity deals in August 2017',
        description:
          "Wherever you are in the UK, we'll point you towards BT's best ADSL and Infinity fibre broadband deals.",
        date: 'Fri, 04 Aug 2017 11:05:44 +0000',
      },
      {
        id: '2b3d0de5-04a7-54bd-aa90-2b05047d19b1',
        url: 'http://www.techradar.com/news/samsung-galaxy-note-8',
        title: 'Samsung Galaxy Note 8 release date, news and rumors',
        description:
          'We now know when the Note 8 will arrive thanks to a confirmed launch event by Samsung. ',
        date: 'Fri, 04 Aug 2017 11:04:25 +0000',
      },
      {
        id: 'aa07031f-d63b-50fb-89fc-0c66c8433198',
        url: 'http://www.techradar.com/news/talktalk-broadband-deals',
        title: 'The best TalkTalk broadband deals in August 2017',
        description:
          'TalkTalk broadband has some of the best prices around. Discover the cheapest internet and Faster fibre deals.',
        date: 'Fri, 04 Aug 2017 11:00:54 +0000',
      },
      {
        id: '5aa71b9d-f78b-53b3-97bd-221af4fb63f5',
        url: 'http://www.techradar.com/news/broadband-and-tv-deals',
        title: 'The best broadband and TV deals in August 2017',
        description:
          "Get the best deal on a broadband and TV package with TechRadar's price comparison tool.",
        date: 'Fri, 04 Aug 2017 11:00:44 +0000',
      },
      {
        id: '57a010c8-3f26-52a1-a6f3-d1b7714117cc',
        url:
          'http://www.techradar.com/news/gaming/consoles/ps4-pre-order-guide-prices-game-bundles-and-where-you-can-get-it-1177651',
        title: 'The best cheap PS4 deals in August 2017',
        description: 'Looking for a great deal on a PS4 or PS4 Pro?',
        date: 'Fri, 04 Aug 2017 11:00:00 +0000',
      },
      {
        id: '31b79476-386d-5877-875f-c4ca86b2cf74',
        url: 'http://www.techradar.com/news/fibre-broadband-deals',
        title: 'The best fibre broadband deals in August 2017',
        description:
          "We've got the cheapest prices on faster fibre broadband deals from the likes of Virgin Media, Sky and BT Infinity.",
        date: 'Fri, 04 Aug 2017 10:45:57 +0000',
      },
      {
        id: '7dc9b46d-6d18-589d-bae6-054a6b54bc47',
        url: 'http://www.techradar.com/news/sky-broadband-deals',
        title: 'The best Sky broadband deals in August 2017',
        description:
          "We'll tell you the cheapest deals around for Sky broadband - plus internet, TV and phone packages.",
        date: 'Fri, 04 Aug 2017 10:40:49 +0000',
      },
      {
        id: '18b82c6b-b509-5a80-acb2-f452a454c59d',
        url: 'http://www.techradar.com/news/broadband-deals',
        title: 'The best broadband deals in August 2017',
        description:
          "We've found the best broadband deals from the likes of BT, Sky, Virgin Media and beyond...",
        date: 'Fri, 04 Aug 2017 10:30:38 +0000',
      },
      {
        id: 'dd58e972-3339-506c-ac7d-ad1d0347d001',
        url: 'http://www.techradar.com/news/xbox-one-deals-uk',
        title: 'The best Xbox One deals in August 2017',
        description:
          'We have all the best Xbox One deals, including the best value bundles and games.',
        date: 'Fri, 04 Aug 2017 10:28:00 +0000',
      },
      {
        id: '2471d405-4bf1-5e56-8c25-4cde1e1d1f40',
        url:
          'http://www.techradar.com/news/google-pixel-2-will-have-no-headphone-jack-further-confirmation',
        title:
          'It looks increasingly likely that the Google Pixel 2 will drop the headphone jack',
        description:
          'A new leak about the Pixel 2 has hammered another nail in the coffin of the headphone jack.',
        date: 'Fri, 04 Aug 2017 10:17:20 +0000',
      },
      {
        id: '89ea7194-61b2-5e74-9d01-c8d0a8871905',
        url: 'http://www.techradar.com/news/the-best-free-word-processor',
        title: 'The best free word processor 2017',
        description:
          'Open and edit text files in any format, back up your documents to the cloud, and write without distractions.',
        date: 'Fri, 04 Aug 2017 10:00:52 +0000',
      },
      {
        id: '0f28cc19-8af4-5406-93fd-7f1df46f3105',
        url:
          'http://www.techradar.com/news/how-artificial-intelligence-can-help-deliver-better-search-results',
        title:
          'How artificial intelligence can help deliver better search results',
        description:
          'With crowdsourcing, AI and supercomputers working in parallel.',
        date: 'Fri, 04 Aug 2017 09:58:16 +0000',
      },
      {
        id: 'b1b90b81-8cc6-5b87-9e7d-815e6a390eba',
        url:
          'http://www.techradar.com/news/you-may-have-to-wait-three-weeks-after-launch-to-buy-the-galaxy-note-8',
        title:
          'You may have to wait three weeks after launch to buy the Galaxy Note 8',
        description:
          'The Samsung Galaxy Note 8 release date could be some time after its expected August 23 launch.',
        date: 'Fri, 04 Aug 2017 09:52:06 +0000',
      },
      {
        id: '3bd5f0eb-e2cd-53f8-9822-fb9a0d9f7ddb',
        url:
          'http://www.techradar.com/news/iphone-8s-camera-could-get-a-big-upgrade-on-both-the-front-and-back',
        title:
          'iPhone 8’s camera could get a big upgrade on both the front and back',
        description:
          'Both the front and rear cameras on the iPhone 8 could be capable of shooting 4K footage at 60fps.',
        date: 'Fri, 04 Aug 2017 09:40:13 +0000',
      },
    ];

    expect(transformXML(xml)).toEqual(expected);
  });

  it('transforms an array of CNN nodes', () => {
    const xml = fs.readFileSync(__dirname + '/xml/cnn.xml', 'utf8');
    const expected = [
      {
        id: '1cb9b666-31a3-5182-8af7-f3cf6e5b9edd',
        url:
          'http://www.cnn.com/2016/12/16/politics/clinton-trump-electoral-college/index.html',
        date: 'Fri, 16 Dec 2016 21:04:51 GMT',
      },
      {
        id: '8975d760-0709-5a21-925f-06221e821473',
        url:
          'http://www.cnn.com/2016/12/16/politics/donald-trump-supporters-vicious-violent/index.html',
        date: 'Sat, 17 Dec 2016 22:15:39 GMT',
      },
      {
        id: 'c1c51216-3019-5304-96d3-625000e9b65c',
        url:
          'http://www.cnn.com/2016/12/16/politics/republican-party-tension/index.html',
        date: 'Fri, 16 Dec 2016 12:04:20 GMT',
      },
      {
        id: 'e2cb69b2-1277-55b5-b542-e6f0a9a2b0b1',
        url:
          'http://www.cnn.com/videos/politics/2016/11/01/electoral-college-explainer-animation-orig.cnn',
        date: 'Tue, 06 Dec 2016 13:06:12 GMT',
      },
      {
        id: 'a96b0732-860f-5a1c-804f-f6a4dd80b14b',
        url:
          'http://www.cnn.com/2016/12/17/politics/china-drone-donald-trump/index.html',
        date: 'Sat, 17 Dec 2016 20:00:51 GMT',
      },
      {
        id: '5cb55839-8017-55a8-85f0-3464c96d9bbc',
        url:
          'http://www.cnn.com/2016/12/17/politics/kfile-david-friedman-israel/index.html',
        date: 'Sat, 17 Dec 2016 19:51:43 GMT',
      },
      {
        id: '0a458f6c-4681-5d5f-825c-72e91e6591b8',
        url:
          'http://www.cnn.com/2016/12/17/us/henry-heimlich-dies-invented-maneuver-to-save-people-from-choking/index.html',
        date: 'Sat, 17 Dec 2016 23:23:21 GMT',
      },
      {
        id: 'd67e0df6-b786-5ba4-a624-aca334394306',
        url:
          'http://www.cnn.com/2016/12/17/asia/earthquake-papua-new-guinea/index.html',
        date: 'Sat, 17 Dec 2016 16:38:20 GMT',
      },
      {
        id: '6492220b-858c-5684-9718-ac2a13d093de',
        url:
          'http://www.cnn.com/2016/12/17/politics/state-department-isis-al-baghdadi-reward/index.html',
        date: 'Sat, 17 Dec 2016 12:31:57 GMT',
      },
      {
        id: 'e94ec7e1-ade5-5bfa-985d-aefd2dc57e30',
        url: 'http://www.cnn.com/2016/12/17/europe/turkey-explosion/index.html',
        date: 'Sat, 17 Dec 2016 20:04:02 GMT',
      },
      {
        id: '4f2fdb92-c8bd-5cd5-a1c4-e51abcfbfd65',
        url:
          'http://www.cnn.com/2016/12/17/europe/pope-80th-birthday-homeless/index.html',
        date: 'Sat, 17 Dec 2016 14:24:27 GMT',
      },
      {
        id: '87ea3897-a22a-5f63-b671-d54bdccb0bfb',
        url:
          'http://www.cnn.com/2016/12/17/europe/anne-frank-betrayal-arrest/index.html',
        date: 'Sat, 17 Dec 2016 08:03:52 GMT',
      },
      {
        id: '427bd24b-dbd9-57af-91d4-7ca4a4c7fa25',
        url:
          'http://www.cnn.com/2016/12/17/europe/irmela-schramm-fights-berlin-street-art-racism/index.html',
        date: 'Sat, 17 Dec 2016 09:44:35 GMT',
      },
      {
        id: '39283033-3298-522f-a6c9-ca483df38015',
        url:
          'http://www.cnn.com/2016/12/17/us/frozen-woman-turns-out-to-be-mannequin-trnd/index.html',
        date: 'Sat, 17 Dec 2016 12:13:47 GMT',
      },
      {
        id: '6bc0c1b8-f674-52df-8d92-5f9f4e3c0ec5',
        url:
          'http://www.cnn.com/2016/12/17/weather/weather-winter-cold/index.html',
        date: 'Sat, 17 Dec 2016 22:07:53 GMT',
      },
      {
        id: '30c925e7-1aa3-50cd-b0e5-d3949fe37f35',
        url:
          'http://www.cnn.com/2016/12/17/tennis/tennis-nadal-coach-moya/index.html',
        date: 'Sat, 17 Dec 2016 21:22:24 GMT',
      },
      {
        id: 'cc65f1e6-13db-5b3e-9199-de85d73fa721',
        url:
          'http://www.cnn.com/2016/12/17/football/football-epl-chelsea-costa-conte/index.html',
        date: 'Sat, 17 Dec 2016 21:52:43 GMT',
      },
      {
        id: 'b4f43a0b-5e8d-5f1f-8e05-ce52a6ea68e9',
        url:
          'http://www.cnn.com/2016/12/16/politics/michelle-obama-home-oprah-interview/index.html',
        date: 'Sat, 17 Dec 2016 23:08:44 GMT',
      },
      {
        id: '9ecf94b2-0109-5b42-ac08-1e943210433d',
        url:
          'http://www.cnn.com/2016/12/17/sport/skiing-val-gardena-downhill/index.html',
        date: 'Sat, 17 Dec 2016 20:29:58 GMT',
      },
      {
        id: 'd2fd0f65-3b16-5005-9f60-58ccdc8df43e',
        url:
          'http://www.cnn.com/2016/12/16/health/fatigue-weakness-depression-aging/index.html',
        date: 'Fri, 16 Dec 2016 10:50:57 GMT',
      },
      {
        id: 'c6fbf35d-61ec-5fc4-8575-10048040ba22',
        url:
          'http://www.cnn.com/2016/12/14/fashion/fighting-cholitas-daniele-tamagni/index.html',
        date: 'Wed, 14 Dec 2016 12:45:06 GMT',
      },
      {
        id: 'ebd1589d-ce18-5b4d-a9ec-c9682bf87bf8',
        url:
          'http://www.cnn.com/2016/12/12/travel/great-tunnels-2016/index.html',
        date: 'Mon, 12 Dec 2016 17:47:21 GMT',
      },
      {
        id: 'c3a4e2b8-8a05-531b-9a60-b759a19e8844',
        url:
          'http://www.cnn.com/2016/12/12/arts/hidden-details-within-ancient-masterpieces/index.html',
        date: 'Tue, 13 Dec 2016 01:16:18 GMT',
      },
      {
        id: '10ef6610-31cc-5d45-80a2-504e89d086fa',
        url:
          'http://www.cnn.com/2015/02/18/living/feat-atlas-of-beauty-photography-project/index.html',
        date: 'Fri, 16 Dec 2016 02:18:53 GMT',
      },
      {
        id: '0694b517-4659-528c-aa12-23b260b6d9c2',
        url: 'http://edition.cnn.com/interactive/2016/12/specials/vanishing/',
      },
      {
        id: 'b2d226d1-12b0-5637-8d71-617d2a3c4353',
        url:
          'http://www.cnn.com/2016/12/15/travel/bugaboo-boxer-christmas-luggage-for-travelers/index.html',
        date: 'Fri, 16 Dec 2016 02:18:45 GMT',
      },
      {
        id: '0b303ad7-e0f0-5c23-820c-12077f26a73c',
        url:
          'http://www.cnn.com/2016/12/12/travel/levi-ice-hotel-luvattumaa/index.html',
        date: 'Mon, 12 Dec 2016 12:01:39 GMT',
      },
      {
        id: '44f3c053-b0f9-5868-a2b5-818b095729f9',
        url: 'http://www.cnn.com/2016/12/16/health/human-eye-color/index.html',
        date: 'Fri, 16 Dec 2016 09:45:13 GMT',
      },
      {
        id: '814bb066-1972-503c-a5b3-dfe1fa774132',
        url:
          'http://www.cnn.com/2016/12/11/arts/amman-ink-jordan-tattoo/index.html',
        date: 'Tue, 13 Dec 2016 01:23:47 GMT',
      },
      {
        id: '8b54f2db-3af9-5a8f-9424-b0e12cafa1dd',
        url:
          'http://www.cnn.com/2016/06/30/architecture/ole-scheeren-bangkok-skyscraper/index.html',
        date: 'Tue, 30 Aug 2016 03:58:31 GMT',
      },
      {
        id: '07fe5520-f5c8-526f-8253-63f0997e81c3',
        url:
          'http://www.cnn.com/2016/12/12/travel/los-angeles-travel-la-la-land-film-locations/index.html',
        date: 'Mon, 12 Dec 2016 21:18:12 GMT',
      },
      {
        id: 'f5459a20-c472-56a4-9802-d95e5fd70864',
        url:
          'http://www.cnn.com/2016/12/15/world/gallery/week-in-photos-1216/index.html',
        date: 'Fri, 16 Dec 2016 03:18:43 GMT',
      },
      {
        id: '281797e7-3d6e-5e5b-b6db-d0b4ae51d602',
        url: 'http://www.cnn.com/2016/12/14/arts/ice-art-designs/index.html',
        date: 'Thu, 15 Dec 2016 13:14:16 GMT',
      },
      {
        id: 'b022978e-7156-5ee7-9e88-f787ea30f349',
        url:
          'http://www.cnn.com/2016/12/16/opinions/rogue-one-diversity-in-a-trump-era-beale/index.html',
        date: 'Sat, 17 Dec 2016 00:26:28 GMT',
      },
      {
        id: 'ecb3f2f5-2e6f-5b60-874d-6afb1d8af480',
        url:
          'http://www.cnn.com/2016/12/16/opinions/george-christensen-duterte-australia/index.html',
        date: 'Sat, 17 Dec 2016 03:21:33 GMT',
      },
      {
        id: 'f8ffaaaa-10d5-5b51-aab2-73d18945d3fc',
        url:
          'http://www.cnn.com/2016/12/16/opinions/aleppo-international-system-failed/index.html',
        date: 'Fri, 16 Dec 2016 19:15:42 GMT',
      },
      {
        id: '1ebe58e6-2600-502b-bd9d-a032eda82add',
        url:
          'http://www.cnn.com/2016/12/15/opinions/its-the-oil-stupid-jacobs/index.html',
        date: 'Fri, 16 Dec 2016 12:27:22 GMT',
      },
      {
        id: 'dda9a5c7-0f2a-59d2-9e25-cc3c63b340a3',
        url:
          'http://www.cnn.com/2016/12/15/opinions/faithless-electors-save-america-piro/index.html',
        date: 'Thu, 15 Dec 2016 20:28:22 GMT',
      },
      {
        id: 'c36c6220-b513-53af-a95a-2c6456bb3384',
        url:
          'https://cnnmoneytransfers.com/?utm_source=cnni&utm_medium=hp-rhr-pz&utm_campaign=position_1',
      },
      {
        id: 'a0080911-9305-5eb9-8085-89e2356dfe7f',
        url:
          'https://cnnmoneytransfers.com/our-services/?utm_source=cnni&utm_medium=hp-rhr-pz&utm_campaign=position2',
      },
      {
        id: '806fb9e5-d1b7-5ef9-b998-89050242ad02',
        url:
          'https://www.cnnmoneytransfers.com/online-payments/?utm_source=cnni&utm_medium=hp-rhr-pz&utm_campaign=position_3',
      },
      {
        id: 'a0d38a55-f1e1-555a-b30e-0099ca8df58a',
        url:
          'http://www.cnn.com/videos/world/2016/11/28/human-traffic-survivor-speaks-out-romo-pkg.cnn',
        date: 'Mon, 28 Nov 2016 20:07:34 GMT',
      },
      {
        id: 'ccb57c29-c9d5-5e73-baf6-9def80cac7b9',
        url:
          'http://www.cnn.com/2016/10/26/americas/andy-stein-orphaned-starfish/index.html',
        date: 'Wed, 26 Oct 2016 16:07:25 GMT',
      },
      {
        id: '3a8b948f-acd8-53d4-9db3-079fad79c72e',
        url:
          'http://www.cnn.com/2016/08/23/world/canada-indigenous-sex-trafficking/index.html',
        date: 'Tue, 23 Aug 2016 12:50:31 GMT',
      },
      {
        id: '64e635c0-a1f9-5723-aec5-c28b9f59ec54',
        url:
          'http://www.cnn.com/2016/04/21/us/project-vic-child-abuse/index.html',
        date: 'Fri, 22 Apr 2016 09:26:13 GMT',
      },
      {
        id: 'a89cc03d-085e-5861-abbc-95cc5c9e9ac2',
        url:
          'http://www.cnn.com/2016/04/17/asia/vietnamese-girls-child-brides-china/index.html',
        date: 'Tue, 19 Apr 2016 10:02:03 GMT',
      },
      {
        id: 'f70e16d1-7c35-552d-ae80-f4c5fc635b86',
        url:
          'http://www.cnn.com/2016/07/13/opinions/5-disguises-human-trafficker/index.html',
        date: 'Wed, 13 Jul 2016 09:46:38 GMT',
      },
      {
        id: 'ea06e3d5-8184-50ef-9e1f-132d0c9a4114',
        url:
          'http://www.cnn.com/videos/world/2016/12/16/aleppo-evacuations-civilians-rebels-orig.cnn',
        date: 'Fri, 16 Dec 2016 17:06:42 GMT',
      },
      {
        id: '3a84fd9e-22b7-562c-a86f-65e558d1722b',
        url:
          'http://www.cnn.com/videos/world/2016/12/16/heartwarming-moments-of-2016-sdg-orig.cnn',
        date: 'Fri, 16 Dec 2016 09:10:35 GMT',
      },
    ];

    expect(transformXML(xml)).toEqual(expected);
  });

  it('transforms an array of hacknernews nodes', () => {
    const xml = fs.readFileSync(__dirname + '/xml/hackernews.rss', 'utf8');
    const expected = [];

    console.log(JSON.stringify(transformXML(xml)));

    expect(transformXML(xml)).toEqual(expected);
  });
});
