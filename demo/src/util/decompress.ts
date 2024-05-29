import { deflateRawSync, inflateRawSync } from "zlib";
import { unpad } from "../fingerprint";

const buffer = Buffer.from(
	"½ÀÇ¿ÇÚ\u001c8\"WÞSrÉ\u0004Ë%\u0005\u0015á³ºàØ¢%_YMíj\u0002\f9ý¨û\u0006¡W'NÎï`Éy\bT0÷ß\u0003ÀÊIºÕ¿ùq5,\u0006z\u001am\u0007\u0014ÌJ>Ò{\bñíì÷öòM§³UMÍû\u001càèÖó\u0016§F¹ôj\u001aUcw\u0006÷öF|ëteë\u000e½\u0017­\f/ñ\u0007óùÎtþË1¨B3ÏñX}+vRÃ\u0010;&se¾òÎÖsÒûiÃ¸CWËëtÝÎÈ\u001cJ{eÖ¿\fÕ¦\u0017ôÝ[Qï\u0012Bâ<;\bhx\f\u001a¨ @^\"/µ,7Ï¤7P\u000e¨GÈ@t][©Ðõ\u000boBÅð\u001däåkÅpI£øåë¥Q¹tFÞL@mðgÏÉÔ,IgÀÚ\u000e#¸á[\u0017`©²Å×ë\u0001¡&J\u000b¨g>\u001d¡)ý\r\u0016- !TEzHà+*\t Ñß^Ì¡!:\r­ä¸×¸á-@ámÐ·ù¯'Û¶'&2¶P\\D\u0001Y\u0002HqbTNÅôYÖJ³\u0019ÀüÎó&OÔ«n\u000eÉ\b£i;=%¢²+\u0000sÓ\u001eeÆRÒ\u0001 'Y\nÃGvÊVÅ|ý²Öï1ÑMSËu¿±Û·\\*¢¡©à}\u0018\u001d×ÎÍÔ¾)Ü¾Øø=b)}¬\fü\u00074EÝ\u0010WÉ'Ø%g}ºI|Ôk§¨§5¶SeÉÊ¯viM!\u0004[  \"ªÐwlL$¹æÆû¤µÇOíÈcè\u0019ÄDÈ#!\u001e\u000bÎH¦0ª»Oì7 3\u000bbÇëcÄÓ\u0017Ìæå\u0011ï@É\u000exI¨\u0005¬}£ÀÏ¥KÕm´§ü\u0015LÉÉNla÷¨\u0012ïNZ7=õLÑ\u0003Ty¤Z\tN-s&n3´â!òfAóG¿SâÒ,\u001c xZaHø\u001aöBùv}sÚZS\u001e0^ÔnTµ+r½qa2¹Ñóg\tVû]ÿs\r\u0003öÖ\f[\u000eúÃ^¯ònÄ£|l;}Jy\u0015¹BÖ1MI²\b6}\u00170âé/D\u0015\u0017¸ë\u0004¶ssÂV\u0013C\r3\fEÛz\r¿dYé5p]=ÐSëJÑL[¶=ò\nP4\u001b}\u0010Í\rÍ¤Àg\r¦\u0010\u0007þ¾ÉÜº~o^¹g3\u0004ÛzÞïyìl\u0015×\u0013¥ûÝÉ¤|Ef\tIVGW~z.Ç×2îShÚ;L*òUã\u001bZñ\f¾ÅD\u0011Ï:®èÔtUf2öWñ.<[\u00028Ë¾\u001aÖKDí¬øÞ#a÷Ñ&qæ²®®|2ÞRíq$\u0006ðëdH¨&Ä\u0018~`øªU\u0018·*ãÕ\u0018~è·}jÛµ¡ùìÍ\u0019IW\u0001ò+nõaÿ¤Ç¨\f÷§§h\u0016wE(·#±Õ|ÙÑåÝÀ¸®]\u0018\nÆ^pK`jWG\u0000ñ\u0018ÞrÊm\u0005:\\\u001e.,um«UÜ¶CúÌyÐ8¾½ð;ÓnR)Ø®\r¢åìÂÚ÷àUØd\u0004\u0012áè\\½í}hÍ´ó­\u0014´Órô^Æ±ð\u000eµjßNcä´ðo¯\u0007}f\u001461ÉÄ´þø\u000e5·XO\u00037³ÏÖÉ\u001fi8¯J{¯È¢\u0006\u0006/êdÇ¾ë¼ù¾ÆõÁ¿Ç\\Ökpsom¹³\bxuïËV\u001f\tÁò\u0017O\u0010MÑ\u0018Íìwñv°õ;©Ìð^ºZAî}\u0012o@¡ËkÊ\u001eHU\u001b!Ñðó!ÔµaÎm\"BÛ\u001a\u0006 Ë¹Æ@ÑÓá\u0004|à5[bÐ÷MÊ\\\u001c\u0005\u001ec\u000b4I>¨\u0002ë]Ó¤é2\u000b&Äx:·86¾«,¢Å/÷üE_hË\u001546­\u0016\u0010\\\u000ed<\u0001xoÐ®ÕÊÄ.C5jÇ!ñMHþõµ8\u0018K\u0015Ê`l*´þmìâ)ït¸ë4D\u001aáãÌ¶P\r¨Qx<'È:§Í ÀùsK(sû]!Tõ\u0019u\u0005²¿û@»ùp$­Xgf]ßðEU÷FB@ð1\u0012âF=6¬r{s_R ÕÞo`ùC·\nëü/Æ¢â_¢íôêô3}íu|÷Ð\u0012\u0015UñßÝ94Í\u0012Àî¼+\u0007¬\u0010\u001bý>½083øo½Þ`\u0006G#EÃ\f!ÖÒü¡O}t\u0014õË\u0010xÈÔ´þ¾¸\u001aûrkÝ,\f±Ò{gV¤1Q\u0002=EQ|j-ÈÃ\u0017\u0000b\\äø\u001bss,}zá\u001a sÚ¾£\u0006\u0013º³ü\u0010Ð!2Ç_H¶\\q^ ßÛQíL\u001ayÖdn\u001c\u0010ÆA1Òiäþ8¼yÅbW¯²\u0010ú©\u0002\u0000Dî\u0003î}ÀïÇÜøô\u0007»¡\ròê\u0007$c¤ñòÈ\t\u001df|}ß52=³ÏÅcö,\u0019BnIþh 9\u0014?e\u0002\u0016[#H\u0018\u0001:»kf±p× Æ0\u0001Ê|ÕST÷c>öE]ñRí\u000fI>®î»2±¨¶ÓÒû£\"[$-\"ö¿\u0014=À;âmèfò\u001eòõF\u0014¢vß¸$\u0012­YëpiX·à6Jã}\\!è¹¤Bðjú1ñ\b-ù+á((ýF(_)7v6X\u0014.RwGà²\u001eû^e\u0018¼1Nìã\u0012ÝIdÓ;\u0007\u0015bàkÙ²~¿|Z´úDô\u000e\u0003\u001fð\u0000µõcÕSd¸¨4ú,×X¿¤²\u001dõ<æÄ½]/©9®)¼S\u0014û2v-jÖX\u000bú7ñ#b÷@BàdÅa}ksy]z,®¡\b7O® {Zz]\\#\u0006îxGIú\u001a¸Æp\u0003kcg\u000fxþPt0h\u0018òB³$[¿3P¿0ê\fU\u0002Ä+\u0004/1¤N£+\f%ÉåÂB1­\u0003Û\u0016WÊB\u001aN\u0013ÏÐ¤1wÒZ\u0003ï>bµ\u000fÔR@\u0010$D\u0003oSZ\u0004(\u001av5zBr1N/y3K6®z,?r÷Ö eU½\u0007;{\u0001×\u0019pâ\u001aßw1¥9\\n'ôÿ§+\nÌ\u001apáÊ\u000b´ôHJ\b¶+¬\u0000²lX\f~÷öÈ#[\u00152ó\u001c:.¡G¿ÿ[ñÂ\u0001ò(Ê# \\$ôvG®>3;¦\u0010(í%þ$õÂWQU.\u001bó!\u0013/Y/mÿæc\u0003£\t¹wõ¨\u0011§÷!F;2Oi\u0015|?Ëãh9\u0002%0þL\b\u0005ó¤¼ûîä³\u0018×â=Õ\u0013ÛYpÇfT\f¼ÿN6 TÝôÖm\u0001rÅû#u\u0017^Øç\\3\u001cð^ôû\tv\u0011JH4ÃÐ÷ãØ}ÙUB[àv7Z_8×®îbPªÈ0±UÊËfltTW&x\u001a\u0004\u001a\u000b³¥Z\u0018DÓÿ='d×\u0019A\u0007\nçoÍ]ß\u0019râ¦þW\u0015Póô\u0011Sw\u0016ØbåöuA6ußù}aB\n.YW\u001a%s2îpêjü:Úp4ZëbCw®#v¼DVk×Î÷^Q×ÝSèÖÅZ«¼\u000366û#\u0002Cvpp©6àÔ>ÉtûøÉ×Z5Áü0<8<ÞçmbsÂEåÆCß9ÖxÓ¶°B{µkl\u0007\u0001Ý\u0005×Z)\u0014^\u0004\u0014\u001fFP±n\fYÐòHö\u000b\u0011Ý\u0004lP\u001er_äì\u0010YjNZ=¤1üJ]#È\u0013·Nt[hhÂ\u0000îéæ\u0015¦ÎWk»ÓÜ-áziJÉ'Gè¡æ{ï~èã\u0006ÙÓ$\u000eó^B b\u0001^\u001a°jeJ=;Ç\u001dÕ«!\"6/zs\u0012ãR9÷E\u00007AØt_qÒ`¨ú\u0017K\u0006ø=)þUÓ\u0001jvW\u000bLÞÅqäþ¯+ÏãüËÅ½âh\u0001 D\u001bÁ8±yÞ/ÅÉ;ÛC°¶\u001dW»5Ç,bG]c0®ZÙÇ_64L¼Ò~:´Îp\fôß×lõÞ{ÕÝé¼5eD\\òSô´Ù\u0017WÒ\u0000¶Þs1Ô\u0010Ó\u0007\u001fá\u001c\n¥ø`^ÌåÆ{¹\u001eÌë'\n\"BnC=D#I¦KóÌH{/ã\u000fèÎÖ#¥u²â\f¼Ïöí\u0014\u001c\t¨ëS\u000e4SuC¦z3\\¸z×B+Ê°ëxðÁ\rÅuß\u001cæÄ\u000e¨¥I-\f\u0002\bÂv>,,É§ ñìÕçæ&noá¦|Ót¹¾Ub ÜaÂÔÑ\tD\u000fm;ñØ$8gÂÃ\"EGÅå\u0014X½ó½C'\u0003\u0011\u001a\u0005\u0007\f.÷ès>{úÏPðº*­\u0019E³èy-%f7ÛÑ£ÜÑÛ\\óÖa\u000bk»\r§µä\u0007Þ\u0003\u0014#á\u000frµi/2uµeå^B\u0015=þèÍþ¬\nízÜ:µ!~I#´ðBä{÷îÐ«¤L!PdÍg¥\u0013_\u001fp\u001dËû{ç`7¶ðì¿%cä»³\u000b´©\u0000/r\u001f©Ñtç¡öPµu\u001c\u000f\u0015@\u0016n$/Ö9dæ|NØ c!\u0013ÚuºÄ Ô\u0012ÐP\u001fj¾Æé p\u0005-{Ñ.FR\u0002é2l#)A¡ä|lgRRr\u0018*\u0007Nß~wp[G&ÞGÆ\u0011FEøU¶xâW#Ot¥§â\u0000\u001bþ[Æ©±r)j\u0002Õo½ª\u0017;\u0003'Á°ÔÑBø\u000eº\u0001brP+-s\u001czóÆzdæ!kÊÏ£´ªD¶vvº´Ö´\u0014^U­É¨FenKêë.*C\u0001ºD1OeÝ\u001bð ®êË\u000f3Ê]0´3PÑÂ |ùò×¼mæw¬¸ó\u001bð:õ=\u000b\u0005°ÀÎyqâ¨ûQ$´@ùeêÃü\u000eº\u001a\u001dÖû©Mz1¹¢\u001e&\u0011×òoÈ6ßnÁv±Cår1¹\u0017ÃºHÃª,PÄV¥ÉÑ3â¿\\Úü³ú\u0005ªÔæ¸hÍuN_Ä3?ë\u0012\u0015ju`®-«\u0003o%M\n/ëË¿T;\u001bÓå,§\u0010*kîáp¿ÖòÕ\u001dû÷ò%)¥°µý.íóÆH¡WB\u0005*eNr¯¨\u0014§ôTÚ¬êáeW\u0003ÂÙµß9Rô»«ú÷iðªgï\"u\u0014\u0019\u0001¨\u0006>ÿxü¶\u00034õD¦àX\u0003ß£ý¢I\u0012éN{Q·4ÜOê¶N(\u0013\u0011ÔÜûÉÜ´vZ\u00043å¥Wì×\u0002\u0010\u0000¥L7ÛÞp;Î\u0018½ÅÓ[¤\\I¯n$F<&zãt¢~_ZdF©!XOQ\u001eÙ@¥\u0017ø¸9\\Pô\t-e\\7C»¤Ò²RápBÐÐVã¼k:ÝJ¡;\u001e¾Ï5ââÔÚßG¡Æc·\u0018YHÓRzÓ\\ªóIìö<\u0014`bMÑ\u001bÈ\u001bfÃJÓ¤?\u001c¾Õ~}¥c6Òé9÷Ë¬\u001d4,¶·(Þ\u0013Ú~\u0006J¯÷\u0004B\u0013íZn%Q9\u000bUüÙâ:ú\b´\b'&»^°$*2ô%Ý§\fT%Ë1Ó¬ÿ¦\u0000\f\u001cÆQµìÓÝ¬×áÿ=u&âY!uñAxqü·\f6,\u0011 Ë¥ÿî`+§\u0007ô7\u0003ù\u001fpâJøÔ\u0001[_×çuwÅKóø\u0000\rÎ-\u0014ëùÒ£ú5Ù©#ë!.Ý§Z¿Bf\u0002jfRþ\u001e\u000f×+CÙ>&~\u0002kH\u0003ªKå\r-À\u00195µ7ü,\u0016í÷´Ãi½4S¥k2\u0012kT#¯÷\u0014\u0004÷ù{·\u0004öÏ_yôwÍÉ*kè.b\\L\u0017{¡L\t¹)2\u000eí\u001d¨àT#¤NÉéàWi¡\u001cñ^n!ÈÑ¥²K'º­íÔcÄEÕA<ÏÍ\u0013¢7îS\bßÄª\r!Ò'·.\u000f':=\nj\"ðÕ\u0010I!\u0011lCpØëÝÝ\u001d~\u0002ëO¢\\a\u0006xýyíL@9e¯Ò\u0007[ô\nåñ­%Ã0,pEÞ\u0001Ú\u0001-´ÏeÈ%\u001a#S8ÿÅÉ¦\u00142ÉÛÒl°ÍðeH\u001dü\u0019üüÄn¾Jd¦i1÷ÔÄV\u0012ãµÙ)p×ì\u0006\u0019\u0004Ç_uHÜ®h«\rù½\u0016½\u0005È>KàG75öæíí\u0000¥\u00073ÒR'bYjÊíÞ²\u000fÝb:\nC+Íù·\t¤7nÓ\u0002Ñ±õI\u0010^ÿ\u001c¹¡¸¥Í\u0011\u0015ÞS\u0012&>á¹M\u0002\u001dÿ·;¾0Að @w\u001fJ¨\nÔ;æ \u0013È\u0012®*ä\u001b§ÖFp¾#\u000fó0a<øõênqH\u0002ç\u001d<7Rç\u001eZ\u0012 (~8çÂ÷õØ\n\u000e7¸ñ\u0014¾Àu7çÆo×^iÒä~j?~Y~v÷ö \bF¾_+A\u00181Ït<Æ|85ÊÑu\u0005KH<#\u001aéÚÉî<zm¢\\01ÿê`(W&¤\u0010ùìîh\u001fý\\QÕUsÿ\u0015ÊA»ú+ð§9zJý¢'¦ö~Ðír9¨\u000bÊçÜ+ºA}xyÏ8ÆD¨dÕ4ºéuQ:\u001b\u0016Ä^ÝJ½yy0\u0012Ý}U£d`\u0014\u000b9Y>ì\u0005n\u000fAý»!p=*\u0011aDf9Â\u0018on\u001dªG2$ór$ô~qd\u0003²cQj`\t«}³£Ù(Æîb\u000b.\u000bqwÌÏA=\u0000¬`)À¬µ©ËØ4Nº\t^H¤MÁeiEÊ\u000f\u0002\u000fÅþ¯*£ÍÛèùþ»üf\u001dàYºÒx:¬à«\u0001Cý\u000fRÝºÝ:Ï§wm¸QÁ+â\u000e\u0006\u001fî_sÏc#}Z\u0017[j5Ø Ç0ËâgÇ%r|xnÐÎ«Æ³'Ø¤îÅ¦Mm·úª»\b}ûscLE|\u0001ï´¡\";]´\u0013Ê®5[f­sãß,Ow;~¢Æ}=\u000fÇóCDàBx\bgï¦\u0013åI «\tL\u0018­PWZµÀ×¿ë>\u0002}ë\fY·¤c {pµ®Æí¸älÑÃWV\u001aw­\f¿3\u000f)HïüÉÁEÝ\rÁub<Ìß&\u0001ÿ>%U\u001dð¤GTV\u0018\u0001d\"û-¥»5ÄþQÏ \u001f8täx¿HxxÄSUI\u0004WÖ¡¹rz®\u001dø\u0014Å¤x//\u0003\u001c_ª3ÒÚ\u0002è13õÄâ\u000býWÿ\u0019 \u001f,\t\u0006Ì@&³«-®¼·2\u00069ù+-mÖÊ^\u0015\r\u0016S\u0010ïô¸8\u0016\u0003Áq\u0002¼ß\u000fLðlh\u001f]í\u0002íTo\u00072Q?åîÓ'Å\u0015ÿÜæ¹c«Ý\u0019\u0015|5ãéYLÿ½üN\"ó`¤\n/JÄÿr\n9ØV¡uP¬âþ±á`8n\té­ÜH\u0018o\u0016G:ÛµºÉÔU÷\u0002³lB\u000bÁöc»$l'\u000e\fd-Xû³_\u000fh¹íoÆIÈFÖÙò/Ò{ÃÕ!j(_Õ[xi*06¯È\u0018¤\u001bt6oZ¹ØgAtÐ4gÀ\u0004£e6Úë±lùT¼ÙìÒ]Èè®\u0017oE:¢È©6ïÚo|ña£\u00155ÐÄ\u0014\u0004¥·\rNÞg§Ùm\u0018á\u0012ö¯\u0006\\\u000bMYJæËTèÀ\u001dÕì¨Õí\u001eSú@1k[\u0005[ç\b£Õ»²mt'jlÝdbÁEÔ\u001dÜsTùjÈ\u00152?¾\u0005\u001bU×ýÝógûTð~-.\u0003\u00171¤}èµYMw;(¼\u0004)«oû\u0019­\"õo²9¢3sõÎí¯\u001aÓæJÖÑBÌ\nmòT\u0007\u0001ÞT!\u000bpº#ò0\tXéÙ§\u0014\u0003%¥\u0006\u00154ÑÈ7µ\u0019(üËA|ÓKÂI\u0011ÎØîV\u0011rRô%±®\bu\u001b`Á\u0012\u001cèì¤F´ÃÒ\u0012\\\u001b\u001e2»×\u0002 BØ Ä:!Ój}Ú÷`\n!øÙ¢³êýsò§:öhýµ°Rág\t\u0013Âé×\u001dç!ªJ³ö­1áæ\n¬MKÏÚ$éñ;\u001cg½ÂõlðßÙìê£ Z³g>\u0012\u0019ùøóÜìÜ)´\rDý,H@#jÇ`\u0014\u000bTõ«1÷\u0003@bÚ´>6^â±ÞE½¡£B\rT1¯Üút2ùÐ±è¢Ó]§Üx ª:rÜ-Lô;oÉÜ¥Ñ×\u0018OÃö\u001f·n\u0016A\"ö>9¤¦\u0012ä=6òîÖöQqM,ÖðWùÎ©\u00073¬Án\u0010iìiÇ¿Ã\u000bøÕÉÛW¤e]¤¿w*ÀÏ®Ü{Ë\u0004i\u000bX)rI0îZ;¨Ð©¬Xøò\u000e)£é\u0005ÐFW©ü¦72\u0010G\b|,ô\u0000]# KCæ®>7\u001bró@·s÷\u0011ÀÂfåò¾¥\u000b\u0001çÙZ*ó£¦ñÀö`¤\u0003âiÉI4\u0012w¨æ\u0001!þ>äë½T?µÀ<³VêE¥~\u001c¬]§Ôànua\u0006,­âH[\u0018ª2íÏº\u001c8Û.ì\u0016ÂC*ÚZô+mùÉÒS\u0014cÈÑLm<_õÖ©¾\u0012ÌëK6ÁEÌ\u001dI÷2±£y%Q/=Ô§{\bÐ\u0011q\u000eô:¼÷«\u0017APó\"ß#*¤P¼\u0014Ö¦»ºè¥\u001fÜû^' Òà·{a°1­nu½tÊ\u0014Iõ6­iL\u001c\u0006â_£kcæ¨\u0003£ÿ\u0011_ºÿ¹Ç¥\u00102jw\u0012?â·KûÂ,\u001d3ÜßX»¾\u001d±|\bá7ÿ\u0012ïúB´\u001c3üÞX]¾#°|Xà7à\u0012\u0013úBT<3ÝXÆ¾³¼ðC\u0007\u0002cZv ¶dÒj\u001a=®Ô¨Ö3ÙØ\u0005¾\u0003S6\u001d\\Æ0¯k®\u000f\rê4*\u001b\ffy©>ãÛÝu¬&\u0005\u0016\u0002è³<;r@\u0016NÈm\\lÙkdÚëÜ¤¬í2ÇS\u0007ál\u001eR\u001d³'ÜE\u001a@q¸óù\u0000³2äb%7^ÚL]c)¹Bnà)üez'å#RLyÕ.Í\u0001å=²f\u001fúÀüéÃM\u0012Õ\u0015û>2ëÜà¨£ÖGÊ}¨n÷¿hE@±mÛ®S ÆPYmâ?"
);

const decoded = inflateRawSync(unpad(buffer));

console.log(decoded.toString());