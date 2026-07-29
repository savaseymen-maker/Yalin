// Merkezi içerik veri katmanı — Yalın Operasyonel Mükemmellik danışmanlık sitesi

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/akademi", label: "Akademi" },
  { href: "/ai-asistan", label: "AI Asistan" },
  { href: "/hizmetler", label: "Danışmanlık" },
  { href: "/dijital-urunler", label: "Dijital Ürünler" },
  { href: "/vaka-calismalari", label: "Vaka Çalışmaları" },
  { href: "/icgoruler", label: "İçgörüler" },
  { href: "/iletisim", label: "İletişim" },
];

// Üst menüde yer almayan ama site içinde erişilebilir sayfalar (Footer'da listelenir)
export const moreLinks = [
  { href: "/metodolojiler", label: "Metodolojiler" },
  { href: "/sektorler", label: "Sektörler" },
  { href: "/akademi/ai-avatar", label: "AI Avatar Akademisi" },
  { href: "/uretim-hatti-paneli", label: "Üretim Panosu" },
];

export const disciplines = [
  {
    key: "lean",
    title: "Yalın Yönetim",
    desc: "İsraf kaynaklarını ortadan kaldırarak akışı, hızı ve müşteri değerini artıran yönetim felsefesi.",
  },
  {
    key: "process",
    title: "Süreç Geliştirme",
    desc: "Uçtan uca iş süreçlerinin haritalanması, yeniden tasarlanması ve sürdürülebilir hale getirilmesi.",
  },
  {
    key: "economics",
    title: "Ekonomik Rasyonalite",
    desc: "Her operasyonel kararın maliyet-fayda mantığıyla, sermaye verimliliği temelinde değerlendirilmesi.",
  },
  {
    key: "sixsigma",
    title: "Six Sigma Metodolojisi",
    desc: "Veriye dayalı analiz ile süreç değişkenliğinin azaltılması ve kalitenin istatistiksel kontrol altına alınması.",
  },
  {
    key: "risk",
    title: "Kurumsal Risk Yönetimi",
    desc: "Operasyonel, finansal ve yönetsel risklerin erken teşhisi ve kurumsal dayanıklılığın inşası.",
  },
];

// ------------------------------------------------------------------
// Gizli Maliyet Alanları — "The Hidden Cost Hunter"
// ------------------------------------------------------------------
export const hiddenCostAreas = [
  { title: "Üretim", desc: "Duruşlar, hız kayıpları ve plansız arızalar yoluyla eriyen kapasite." },
  { title: "Planlama", desc: "Hatalı talep tahmini ve çizelgeleme kaynaklı acil müdahale maliyetleri." },
  { title: "Depo", desc: "Yanlış yerleşim, çift elleçleme ve görünmeyen stok kayıpları." },
  { title: "Lojistik", desc: "Optimum olmayan rotalar, boş kilometre ve teslimat gecikme bedelleri." },
  { title: "Bakım", desc: "Reaktif bakım kültürünün yarattığı beklenmedik duruş ve yedek parça israfı." },
  { title: "Satın Alma", desc: "Tedarikçi bağımlılığı, hacim ıskalanması ve gizli sözleşme riskleri." },
  { title: "Kalite", desc: "Yeniden işleme, iade ve müşteri güveni kaybının finansal karşılığı." },
  { title: "Yönetim", desc: "Standart dışı raporlama ve karar gecikmelerinin fırsat maliyeti." },
  { title: "Enerji", desc: "Kapasite dışı çalışan ekipman ve izlenmeyen tüketim noktaları." },
  { title: "Envanter", desc: "Fazla stokta bağlı sermaye ve modası geçen malzeme riskleri." },
  { title: "Bekleme", desc: "Süreçler arası senkronizasyon eksikliğinin yarattığı zaman kaybı." },
  { title: "Yeniden İşleme", desc: "İlk seferde doğru yapılamayan işin görünmeyen ikinci maliyeti." },
  { title: "Kapasite Kaybı", desc: "Teorik kapasite ile fiili çıktı arasındaki açığın finansal karşılığı." },
  { title: "Zayıf Akış", desc: "Değer akışındaki kesintilerin teslim süresine yansıyan etkisi." },
  { title: "İnsan Hataları", desc: "Standardizasyon eksikliğinden kaynaklanan tekrarlayan hatalar." },
  { title: "Yönetim Kararları", desc: "Veriye değil sezgiye dayanan kararların uzun vadeli maliyeti." },
];

// ------------------------------------------------------------------
// İşletme Doktoru — Tanı Süreci
// ------------------------------------------------------------------
export const doctorStages = [
  {
    step: "01",
    title: "Belirtiler",
    subtitle: "Symptoms",
    desc: "Yönetimin fark ettiği ancak henüz tanımlayamadığı sinyaller: gecikmeler, kâr marjı erimesi, tekrarlayan şikayetler.",
    mapping: "Gemba Walk & Voice of Customer",
  },
  {
    step: "02",
    title: "Teşhis",
    subtitle: "Diagnosis",
    desc: "Saha gözlemi ve yönetim görüşmeleriyle olası kök nedenlerin ön listesinin çıkarılması.",
    mapping: "Değer Akışı Haritalama (VSM)",
  },
  {
    step: "03",
    title: "Laboratuvar Analizi",
    subtitle: "Laboratory Analysis",
    desc: "Operasyonel veri, üretim kayıtları ve finansal tabloların istatistiksel olarak incelenmesi.",
    mapping: "MSA, SPC, Proses Kapabilite Analizi",
  },
  {
    step: "04",
    title: "Kök Neden",
    subtitle: "Root Cause",
    desc: "Belirtilerin arkasındaki gerçek nedenin çok değişkenli analizle doğrulanması.",
    mapping: "5 Neden, Balık Kılçığı, DOE, FMEA",
  },
  {
    step: "05",
    title: "Tedavi",
    subtitle: "Treatment",
    desc: "Kanıta dayalı, önceliklendirilmiş çözüm ve iyileştirme planının tasarlanması.",
    mapping: "Kaizen & A3 Problem Çözme",
  },
  {
    step: "06",
    title: "Kontrol",
    subtitle: "Control",
    desc: "Uygulanan çözümün etkisinin ölçülmesi ve standardın sahiplenilmesi.",
    mapping: "Kontrol Planı & Standart İş",
  },
  {
    step: "07",
    title: "Sürekli İzleme",
    subtitle: "Continuous Monitoring",
    desc: "Yönetim panelleri ile kalıcı takip ve erken uyarı mekanizmalarının kurulması.",
    mapping: "Yönetim Panosu & KPI İzleme",
  },
];

// ------------------------------------------------------------------
// İşletme Check-Up — Olgunluk Kategorileri
// ------------------------------------------------------------------
export const checkupCategories = [
  { title: "Operasyonel Mükemmellik", score: 62 },
  { title: "Yalın Olgunluk", score: 54 },
  { title: "Yönetim Sistemleri", score: 68 },
  { title: "Süreç Kapasitesi", score: 58 },
  { title: "Risk Yönetimi", score: 47 },
  { title: "Veri Kalitesi", score: 51 },
  { title: "Performans Ölçümü", score: 65 },
  { title: "Dijital Dönüşüm", score: 44 },
  { title: "Görsel Yönetim", score: 59 },
  { title: "Kurumsal Hafıza", score: 40 },
  { title: "Standardizasyon", score: 56 },
  { title: "KPI Yönetimi", score: 61 },
  { title: "Liderlik", score: 70 },
  { title: "Organizasyonel Kültür", score: 53 },
];

// ------------------------------------------------------------------
// Kurtuluş Reçetesi
// ------------------------------------------------------------------
export const prescriptionItems = [
  { title: "Hızlı Kazanımlar", desc: "30 gün içinde uygulanabilecek, düşük maliyetli, yüksek etkili müdahaleler." },
  { title: "90 Günlük Aksiyon Planı", desc: "Önceliklendirilmiş, sahiplendirilmiş ve takvimli dönüşüm yol haritası." },
  { title: "Six Sigma Projeleri", desc: "Kritik değişkenliğin azaltılmasına yönelik DMAIC tabanlı proje portföyü." },
  { title: "Yalın Projeler", desc: "Akışı iyileştiren, israfı azaltan hedefli kaizen çalışmaları." },
  { title: "Risk Azaltma Planı", desc: "Önceliklendirilmiş operasyonel ve kurumsal risklerin kontrol altına alınması." },
  { title: "Standardizasyon Yol Haritası", desc: "Kritik süreçlerde standart işin tanımlanması ve sahiplenilmesi." },
  { title: "Yönetim Panosu", desc: "Gerçek zamanlı karar almayı destekleyen yönetici gösterge panelleri." },
  { title: "Dijital Çözümler", desc: "Veri toplama, izleme ve raporlamayı otomatikleştiren dijital araçlar." },
  { title: "Performans KPI'ları", desc: "Stratejiyle hizalı, ölçülebilir performans göstergeleri seti." },
  { title: "Maliyet Tasarrufu Fırsatları", desc: "Finansal etkisi doğrulanmış, önceliklendirilmiş tasarruf kalemleri." },
];

// ------------------------------------------------------------------
// Hizmetler
// ------------------------------------------------------------------
export const serviceGroups = [
  {
    group: "Operasyonel Mükemmellik",
    items: [
      { title: "Operasyonel Mükemmellik", desc: "Kurum genelinde sürdürülebilir performans kültürünün inşası." },
      { title: "Yalın Dönüşüm", desc: "İsrafın sistematik olarak ortadan kaldırıldığı uçtan uca dönüşüm programları." },
      { title: "Süreç Geliştirme", desc: "Mevcut süreçlerin yeniden tasarlanarak değer akışının hızlandırılması." },
      { title: "Fabrika Check-Up", desc: "Saha bazlı, kapsamlı operasyonel teşhis ve olgunluk değerlendirmesi." },
    ],
  },
  {
    group: "Six Sigma & Kalite",
    items: [
      { title: "Six Sigma Projeleri", desc: "DMAIC metodolojisiyle yürütülen ölçülebilir kalite iyileştirme projeleri." },
      { title: "Kök Neden Analizi", desc: "Tekrarlayan problemlerin istatistiksel yöntemlerle kalıcı çözümü." },
      { title: "Operasyonel Veri Analitiği", desc: "Saha verisinin analiz edilebilir, karar destekleyici hale getirilmesi." },
    ],
  },
  {
    group: "Yönetim Sistemleri & Teknoloji",
    items: [
      { title: "Dijital Yönetim Sistemleri", desc: "Operasyonu dijital ortamda izlenebilir ve yönetilebilir kılan sistemler." },
      { title: "Yönetici Gösterge Panelleri", desc: "Üst yönetime gerçek zamanlı görünürlük sağlayan dashboard çözümleri." },
      { title: "İş Zekası (Business Intelligence)", desc: "Dağınık verinin stratejik içgörüye dönüştürülmesi." },
      { title: "KPI Sistemleri", desc: "Stratejik hedeflerle hizalı performans gösterge mimarisi." },
    ],
  },
  {
    group: "Risk & Yönetişim",
    items: [
      { title: "Kurumsal Risk Yönetimi", desc: "COSO ve ISO 31000 çerçevelerine dayalı bütünsel risk yönetişimi." },
      { title: "İç Kontrol Sistemleri", desc: "Operasyonel ve finansal süreçlerde güvence mekanizmalarının kurulması." },
      { title: "Kurumsal Yönetişim", desc: "Şeffaf, hesap verebilir ve sürdürülebilir yönetim yapılarının tasarımı." },
    ],
  },
  {
    group: "Standardizasyon & Denetim",
    items: [
      { title: "Standardizasyon", desc: "En iyi uygulamaların kurumsal standarda dönüştürülmesi." },
      { title: "Operasyonel Denetimler", desc: "Bağımsız, veriye dayalı operasyonel uygunluk ve performans denetimleri." },
      { title: "Yönetim Danışmanlığı", desc: "Üst yönetim ve yönetim kurullarına stratejik operasyonel danışmanlık." },
    ],
  },
];

// ------------------------------------------------------------------
// Metodolojiler
// ------------------------------------------------------------------
export const methodologyGroups = [
  {
    group: "Yalın Düşünce",
    items: [
      { title: "Yalın Düşünce (Lean Thinking)", desc: "Değeri müşteri gözünden tanımlayarak israfı sistemli biçimde ortadan kaldıran temel felsefe." },
      { title: "PDCA", desc: "Planla-Uygula-Kontrol Et-Önlem Al döngüsüyle sürekli iyileştirmenin disiplini." },
      { title: "A3", desc: "Problem, analiz ve çözümün tek sayfada görselleştirildiği yapılandırılmış raporlama aracı." },
      { title: "5 Neden", desc: "Bir problemin ardışık sorgulanmasıyla kök nedenine ulaşan basit ama güçlü teknik." },
      { title: "Balık Kılçığı (Ishikawa)", desc: "Bir problemin olası nedenlerini kategorik olarak görselleştiren neden-sonuç diyagramı." },
      { title: "Değer Akışı Haritalama (VSM)", desc: "Hammaddeden müşteriye kadar tüm akışın görselleştirilerek israfın tespit edilmesi." },
      { title: "TPM (Toplam Verimli Bakım)", desc: "Ekipman etkinliğini maksimize eden, operatör sahipliğine dayalı bakım felsefesi." },
      { title: "5S", desc: "İş yerinin düzen, temizlik ve standardizasyon yoluyla verimli hale getirilmesi." },
      { title: "SMED", desc: "Model/ürün değişim sürelerinin sistematik olarak dakikalara indirilmesi." },
      { title: "Görsel Yönetim", desc: "Performansın ve anormalliklerin herkes tarafından anında görülebilir kılınması." },
    ],
  },
  {
    group: "Six Sigma & İstatistiksel Analiz",
    items: [
      { title: "DMAIC", desc: "Tanımla-Ölç-Analiz Et-İyileştir-Kontrol Et yapısıyla yürütülen Six Sigma proje disiplini." },
      { title: "MSA (Ölçüm Sistemi Analizi)", desc: "Karar almadan önce ölçüm sisteminin güvenilirliğinin doğrulanması." },
      { title: "SPC (İstatistiksel Proses Kontrolü)", desc: "Süreç değişkenliğinin kontrol grafikleriyle gerçek zamanlı izlenmesi." },
      { title: "DOE (Deney Tasarımı)", desc: "Kritik proses değişkenlerinin bilimsel deneylerle optimize edilmesi." },
      { title: "FMEA", desc: "Olası hata modlarının etkisinin önceden değerlendirilerek önlenmesi." },
    ],
  },
  {
    group: "Risk & Yönetişim Çerçeveleri",
    items: [
      { title: "Kurumsal Risk Yönetimi", desc: "Stratejik, operasyonel ve finansal risklerin bütünleşik olarak yönetilmesi." },
      { title: "COSO", desc: "İç kontrol ve kurumsal risk yönetimi için uluslararası kabul görmüş çerçeve." },
      { title: "ISO 31000", desc: "Risk yönetimi ilkeleri ve uygulama rehberliği sunan küresel standart." },
      { title: "İç Kontrol", desc: "Operasyonel güvence ve uyumu sağlayan kontrol mekanizmalarının tasarımı." },
      { title: "Süreç Haritalama", desc: "İş süreçlerinin uçtan uca görselleştirilerek sorumluluk ve akışın netleştirilmesi." },
    ],
  },
];

// ------------------------------------------------------------------
// Sektörler
// ------------------------------------------------------------------
export const industries = [
  { title: "Demir Çelik", desc: "Yüksek kapasiteli üretim hatlarında enerji ve verim optimizasyonu." },
  { title: "Otomotiv", desc: "Yalın üretim sistemlerinin doğduğu sektörde derinlemesine uygulama tecrübesi." },
  { title: "İmalat", desc: "Karmaşık ürün ağaçlarında akış ve kalite dengesinin kurulması." },
  { title: "Gıda", desc: "Hijyen, izlenebilirlik ve israf yönetiminin bir arada ele alınması." },
  { title: "Makine İmalatı", desc: "Düşük hacim-yüksek çeşitlilik ortamlarında esnek üretim tasarımı." },
  { title: "Yapı Malzemeleri", desc: "Enerji yoğun proseslerde kapasite ve maliyet optimizasyonu." },
  { title: "Lojistik", desc: "Filo, rota ve depo operasyonlarında uçtan uca verimlilik." },
  { title: "Depolama", desc: "Elleçleme, yerleşim ve envanter doğruluğunun sistematik iyileştirilmesi." },
  { title: "Enerji", desc: "Üretim sürekliliği ve varlık performansı yönetimi." },
  { title: "Genel Endüstri", desc: "Sektör bağımsız operasyonel mükemmellik ilkelerinin uyarlanması." },
];

// ------------------------------------------------------------------
// Vaka Çalışmaları
// ------------------------------------------------------------------
export const caseStudies = [
  {
    slug: "demir-celik-enerji-verimliligi",
    industry: "Demir Çelik",
    title: "Ergitme Hattında Gizli Enerji Kaybının Ortaya Çıkarılması",
    summary: "Yıllık enerji giderlerinin %14'ünün kapasite dışı çalışan ekipmanlardan kaynaklandığı tespit edildi.",
    problem: "İşletme, artan enerji maliyetlerinin üretim hacmindeki artıştan kaynaklandığını düşünüyordu; ancak kâr marjı beklenenin altında kalmaya devam ediyordu.",
    diagnosis: "Saha gözlemleri ve vardiya bazlı üretim verileri karşılaştırıldığında, ekipmanın önemli bir kısmının optimum kapasitenin altında ve verimsiz rejimlerde çalıştığı görüldü.",
    dataAnalysis: "12 haftalık enerji tüketim verisi SPC ile analiz edildi; kontrol dışı varyasyon gösteren 3 kritik ekipman grubu belirlendi.",
    rootCause: "Bakım programının reaktif olması ve operatör standardının bulunmaması, ekipmanların kronik olarak verimsiz noktalarda çalıştırılmasına yol açıyordu.",
    solution: "TPM prensipleri uygulanarak operatör bakım sorumluluğu tanımlandı; SMED ile geçiş süreleri kısaltıldı; enerji izleme panosu kuruldu.",
    financialImpact: "Yıllık enerji giderinde %14 azalma, tahmini 2,1 milyon USD tasarruf.",
    operationalImpact: "Plansız duruşlarda %31 azalma, ekipman kullanılabilirliğinde %9 artış.",
    lessons: "Enerji maliyeti bir 'satın alma' problemi değil, çoğunlukla bir 'operasyonel disiplin' problemidir.",
  },
  {
    slug: "otomotiv-yan-sanayi-hata-orani",
    industry: "Otomotiv",
    title: "Yan Sanayide Kronik Hata Oranının Six Sigma ile Çözümü",
    summary: "Müşteri iadelerinin kök nedeni, üç farklı departmanın birbirinden bağımsız çalışmasında gizliydi.",
    problem: "Bir otomotiv yan sanayi tedarikçisi, aylardır süren yüksek hata oranı nedeniyle müşteri güvenini kaybetme riskiyle karşı karşıyaydı.",
    diagnosis: "Gemba çalışması, hataların tek bir istasyonda değil, üç ardışık süreç arasındaki devir noktalarında biriktiğini ortaya koydu.",
    dataAnalysis: "MSA ile ölçüm sistemi doğrulandıktan sonra, DOE uygulanarak hata oranını etkileyen üç kritik parametre istatistiksel olarak izole edildi.",
    rootCause: "Süreçler arası standart devir kriterlerinin tanımsız olması, değişkenliğin bir sonraki istasyona taşınmasına neden oluyordu.",
    solution: "DMAIC projesi kapsamında istasyonlar arası kabul kriterleri standardize edildi; FMEA ile önleyici kontroller yerleştirildi.",
    financialImpact: "İade maliyetlerinde yıllık 640.000 USD azalma.",
    operationalImpact: "Hata oranında %58 azalma, ilk seferde doğru üretim oranında (FTY) %22 artış.",
    lessons: "Kalite problemleri genellikle bir istasyonda değil, istasyonlar arasındaki 'boşluklarda' yaşar.",
  },
  {
    slug: "lojistik-filo-kapasite-kaybi",
    industry: "Lojistik",
    title: "Filo Operasyonunda Görünmeyen Kapasite Kaybının Tedavisi",
    summary: "Filonun %19'u, planlama hatası nedeniyle her gün beklemede kayboluyordu.",
    problem: "Lojistik firması artan filo yatırımına rağmen teslimat kapasitesini artıramıyor, ek araç almayı planlıyordu.",
    diagnosis: "Değer akışı haritalama, araçların önemli bir bölümünün yükleme noktalarında beklemede geçirdiği süreyi gözler önüne serdi.",
    dataAnalysis: "Rota ve bekleme verisi analiz edildiğinde, kapasite kaybının asıl kaynağının araç sayısı değil, çizelgeleme mantığı olduğu doğrulandı.",
    rootCause: "Yükleme önceliklendirmesinin merkezi bir mantığa değil, saha inisiyatifine bırakılmış olması dengesiz yük dağılımına yol açıyordu.",
    solution: "Merkezi çizelgeleme algoritması ve görsel yönetim panosu devreye alındı; standart yükleme protokolü tanımlandı.",
    financialImpact: "Planlanan araç yatırımının ertelenmesiyle 1,4 milyon USD sermaye tasarrufu.",
    operationalImpact: "Filo kullanım oranında %19 artış, ortalama bekleme süresinde %35 azalma.",
    lessons: "Kapasite artışının cevabı çoğu zaman yeni yatırım değil, mevcut kapasitenin doğru yönetilmesidir.",
  },
];

// ------------------------------------------------------------------
// İçgörüler (Blog)
// ------------------------------------------------------------------
export const insights = [
  {
    slug: "gizli-maliyetler-neden-gorulmez",
    topic: "Gizli Maliyetler",
    title: "Gizli Maliyetler Neden Bilanço Onaylanana Kadar Görülmez?",
    excerpt: "Finansal tablolar, operasyonel kaybın sonucunu gösterir; nedenini değil. Teşhis bu yüzden veriyle başlar.",
    readTime: "6 dk",
    body: [
      "Çoğu yönetim ekibi, kaybı ancak kâr marjı raporlarına yansıdığında fark eder. Ancak o noktaya gelindiğinde kayıp aylar önce, üretim hattında, depoda ya da bir karar toplantısında zaten gerçekleşmiştir.",
      "Gizli maliyetlerin ortak özelliği, hiçbir tek bir raporda tam olarak görünmemeleridir. Bekleme süresi lojistik raporunda, yeniden işleme kalite raporunda, enerji kaybı ise bakım raporunda parça parça saklanır.",
      "Bu nedenle gerçek teşhis, tek bir departmanın verisiyle değil, uçtan uca bir değer akışı analizi ile mümkündür.",
    ],
  },
  {
    slug: "yalin-dusuncenin-ozü",
    topic: "Yalın Düşünce",
    title: "Yalın Düşüncenin Özü: Hız Değil, Akış",
    excerpt: "Yalın yönetim bir hız yarışı değildir; kesintisiz ve öngörülebilir bir akış tasarımıdır.",
    readTime: "5 dk",
    body: [
      "Yalın yönetim sıklıkla 'daha hızlı çalışmak' ile karıştırılır. Oysa temel amaç, değerin müşteriye kesintisiz, öngörülebilir bir akışla ulaşmasını sağlamaktır.",
      "Bir sürecin hızlandırılması, akıştaki temel tıkanıklık çözülmeden yapıldığında yalnızca israfı bir sonraki istasyona taşır.",
      "Bu nedenle her yalın dönüşüm, hız değil, akışın haritalanmasıyla başlamalıdır.",
    ],
  },
  {
    slug: "ekonomik-rasyonalite-ve-operasyon",
    topic: "Ekonomik Düşünce",
    title: "Ekonomik Rasyonalite: Her Operasyonel Kararın Bir Fırsat Maliyeti Vardır",
    excerpt: "Operasyonel kararlar mühendislik problemleri kadar ekonomik problemlerdir.",
    readTime: "7 dk",
    body: [
      "Bir üretim hattında alınan her karar, aslında bir kaynak tahsis kararıdır. Hangi siparişin önce üretileceği, hangi ekipmana yatırım yapılacağı, hangi vardiyanın açılacağı — bunların hepsi ekonomik bir seçimdir.",
      "Ekonomik rasyonalite, operasyonel kararları yalnızca teknik değil, fırsat maliyeti perspektifinden de değerlendirmeyi gerektirir.",
      "Bu bakış açısı olmadan alınan 'doğru' mühendislik kararları, işletme için yanlış ekonomik sonuçlar doğurabilir.",
    ],
  },
  {
    slug: "operasyonel-mukemmellik-bir-varis-noktasi-degildir",
    topic: "Operasyonel Mükemmellik",
    title: "Operasyonel Mükemmellik Bir Varış Noktası Değil, Bir Disiplindir",
    excerpt: "Sürdürülebilir performans, tek seferlik projelerle değil, kurumsal bir alışkanlıkla inşa edilir.",
    readTime: "6 dk",
    body: [
      "Birçok organizasyon operasyonel mükemmelliği bir proje olarak ele alır: başlangıcı ve bitişi olan bir girişim.",
      "Oysa gerçek operasyonel mükemmellik, günlük yönetim rutinlerine, standart işe ve liderlik davranışına gömülü bir disiplindir.",
      "Bu nedenle danışmanlık projelerinin nihai çıktısı bir rapor değil, kurumun kendi kendini iyileştirme kapasitesi olmalıdır.",
    ],
  },
  {
    slug: "six-sigma-sezgiye-karsi-veri",
    topic: "Six Sigma",
    title: "Six Sigma: Sezgiye Karşı Veri",
    desc: "Deneyim değerlidir, ancak değişkenliği yönetmek veri gerektirir.",
    excerpt: "Deneyimli bir yönetici sorunu 'hisseder'; Six Sigma sorunu ölçer ve doğrular.",
    readTime: "5 dk",
    body: [
      "Deneyimli yöneticiler genellikle bir sorunun nerede olduğunu sezgisel olarak bilirler. Ancak sezgi, kök nedeni değil, semptomu işaret eder.",
      "Six Sigma, bu sezgiyi reddetmez; onu istatistiksel doğrulamaya tabi tutar. DMAIC'in her adımı, varsayımı veriyle test eder.",
      "Sonuç, daha az tartışmalı ve daha kalıcı çözümlerdir.",
    ],
  },
  {
    slug: "risk-yonetimi-kriz-oncesi-disiplin",
    topic: "Risk Yönetimi",
    title: "Kurumsal Risk Yönetimi: Krizden Sonra Değil, Önce Devreye Girmelidir",
    excerpt: "En pahalı risk yönetimi, krizin ortasında kurulanıdır.",
    readTime: "6 dk",
    body: [
      "Birçok işletmede risk yönetimi, bir kriz sonrası refleks olarak ortaya çıkar. Oysa etkili risk yönetimi, olay gerçekleşmeden önce tasarlanan bir sistemdir.",
      "COSO ve ISO 31000 gibi çerçeveler, riskleri reaktif değil proaktif olarak ele almak için tasarlanmıştır.",
      "Kurumsal dayanıklılık, riskin yokluğu değil, riskin erken görülebilirliğidir.",
    ],
  },
  {
    slug: "surekli-iyilestirme-kulturu",
    topic: "Sürekli İyileştirme",
    title: "Sürekli İyileştirme Bir Departman Değil, Bir Kültürdür",
    excerpt: "Kaizen'i bir birime devretmek, onu organizasyonun geri kalanından izole eder.",
    readTime: "5 dk",
    body: [
      "Sürekli iyileştirmeyi tek bir 'mükemmellik departmanına' devretmek yaygın bir hatadır. Bu yaklaşım, iyileştirmeyi sahadan koparır.",
      "Gerçek kaizen kültürü, her seviyedeki çalışanın günlük işinin bir parçası olarak küçük iyileştirmeler yapabildiği bir ortamda yaşar.",
      "Liderliğin rolü, iyileştirmeyi yapmak değil, onun için alan açmaktır.",
    ],
  },
  {
    slug: "veriye-dayali-karar-alma",
    topic: "Karar Alma",
    title: "Yönetim Kararlarının Görünmeyen Maliyeti",
    excerpt: "En pahalı kararlar, çoğu zaman en hızlı alınanlardır.",
    readTime: "6 dk",
    body: [
      "Baskı altında alınan kararlar genellikle mevcut veriyle değil, mevcut alışkanlıkla şekillenir.",
      "Bu kararların maliyeti nadiren anında görülür; genellikle aylar sonra başka bir sorun olarak geri döner.",
      "Karar kalitesini artırmanın yolu daha fazla toplantı değil, daha güvenilir ve zamanında veridir.",
    ],
  },
  {
    slug: "liderlik-ve-standart-is",
    topic: "Liderlik",
    title: "Liderlik: Standardı Koyan Değil, Standardı Yaşatan",
    excerpt: "Bir standardın kağıt üzerinde var olması, sahada uygulanmasını garanti etmez.",
    readTime: "5 dk",
    body: [
      "Birçok organizasyonda standart operasyon prosedürleri vardır; ancak bunlar günlük yönetim rutinine gömülü değildir.",
      "Liderliğin görevi yalnızca standardı yazmak değil, onu günlük denetim ve koçluk yoluyla canlı tutmaktır.",
      "Standart iş, bir doküman değil, bir liderlik alışkanlığıdır.",
    ],
  },
  {
    slug: "kurumsal-hafiza-neden-kaybolur",
    topic: "Kurumsal Hafıza",
    title: "Kurumsal Hafıza Neden Bir Kişiyle Birlikte Kapıdan Çıkar?",
    excerpt: "Bilgi bir kişide değil, bir sistemde yaşamalıdır.",
    readTime: "6 dk",
    body: [
      "Kritik operasyonel bilginin belirli kişilerin zihninde saklandığı organizasyonlarda, bir istifa aynı zamanda bir bilgi kaybıdır.",
      "Kurumsal hafızanın sistematik hale getirilmesi, standart iş dokümantasyonu, kök neden kayıtları ve ders çıkarma mekanizmalarıyla mümkündür.",
      "Bu, sadece bir arşivleme meselesi değil, kurumsal risk yönetiminin bir parçasıdır.",
    ],
  },
  {
    slug: "fabrika-yonetiminde-gorsel-disiplin",
    topic: "Fabrika Yönetimi",
    title: "Fabrika Yönetiminde Görsel Disiplinin Gücü",
    excerpt: "Bir sorunu görebiliyorsanız, onu çözme şansınız vardır; göremiyorsanız yoktur.",
    readTime: "5 dk",
    body: [
      "Görsel yönetim, karmaşık verileri herkesin anlayabileceği basit sinyallere dönüştürür.",
      "İyi tasarlanmış bir görsel yönetim sistemi, bir sorunun raporlanmasını beklemez; sorunu anında görünür kılar.",
      "Bu, sahadaki her çalışanı bir kalite kontrol noktasına dönüştürür.",
    ],
  },
];

// ------------------------------------------------------------------
// Güven Şeridi — Ana Sayfa Hero Altı
// ------------------------------------------------------------------
export const trustStrip = [
  "20+ Yıl Saha Deneyimi",
  "Türkçe & İngilizce İçerik",
  "AI Destekli Öğrenme",
  "Kurumsal Akademi Lisansı",
  "Sertifikalı Eğitimler",
];

export const stats = [
  { value: "150+", label: "Tamamlanan Proje" },
  { value: "%18", label: "Ortalama Maliyet Azaltımı" },
  { value: "10", label: "Sektörde Derin Tecrübe" },
  { value: "5", label: "Entegre Disiplin" },
];

// ------------------------------------------------------------------
// Üretim Hattı Yönetim Panosu — Örnek Demo Verisi
// ------------------------------------------------------------------
export const productionLineKpis = [
  { key: "oee", label: "OEE (Genel Ekipman Etkinliği)", value: 78, target: 85, unit: "%", delta: 3.2 },
  { key: "availability", label: "Kullanılabilirlik", value: 91, target: 95, unit: "%", delta: 1.1 },
  { key: "performance", label: "Performans", value: 88, target: 92, unit: "%", delta: -0.8 },
  { key: "quality", label: "Kalite (İlk Seferde Doğru - FTY)", value: 97.4, target: 99, unit: "%", delta: 0.4 },
  { key: "output", label: "Saatlik Çıktı", value: 342, target: 380, unit: "adet/sa", delta: 12 },
  { key: "downtime", label: "Plansız Duruş", value: 46, target: 20, unit: "dk/vardiya", delta: -18, invert: true },
  { key: "scrap", label: "Fire Oranı", value: 2.1, target: 1.0, unit: "%", delta: -0.3, invert: true },
  { key: "energy", label: "Enerji Yoğunluğu", value: 1.34, target: 1.1, unit: "kWh/adet", delta: 0.06, invert: true },
];

export const productionLineStations = [
  { name: "Hammadde Besleme", status: "ok", throughput: 412 },
  { name: "Kesim", status: "ok", throughput: 398 },
  { name: "Kaynak", status: "warning", throughput: 356 },
  { name: "Montaj", status: "ok", throughput: 351 },
  { name: "Kalite Kontrol", status: "warning", throughput: 342 },
  { name: "Paketleme", status: "stopped", throughput: 0 },
] as const;

export const productionLineOeeTrend = [71, 73, 70, 75, 77, 74, 79, 76, 80, 78, 81, 78];

export const productionLineDowntimeReasons = [
  { reason: "Planlı Bakım Dışı Arıza", minutes: 142 },
  { reason: "Model/Ürün Değişimi (Setup)", minutes: 96 },
  { reason: "Malzeme Bekleme", minutes: 71 },
  { reason: "Kalite Kontrol Duruşu", minutes: 54 },
  { reason: "Operatör Değişimi", minutes: 28 },
];

export const productionLineAlerts = [
  { time: "08:42", severity: "critical", text: "Paketleme istasyonu durdu — sensör arızası şüphesi." },
  { time: "08:35", severity: "warning", text: "Kaynak istasyonunda sıcaklık kontrol limiti dışına çıktı (SPC uyarısı)." },
  { time: "08:21", severity: "warning", text: "Kalite kontrolde art arda 3 ölçüm toleransın altında kaldı." },
  { time: "07:58", severity: "info", text: "Vardiya devri tamamlandı, standart iş kontrol listesi onaylandı." },
  { time: "07:40", severity: "info", text: "SMED hedefine göre model değişimi 8 dakika erken tamamlandı." },
];

// ------------------------------------------------------------------
// Akademi — Eğitim Kütüphanesi
// ------------------------------------------------------------------
export const academyFormats = [
  { title: "PDF Kitap", desc: "Her modülün özet ve referans dokümanı." },
  { title: "Sunum", desc: "Eğitmen formatında hazır slayt seti." },
  { title: "Çalışma Kitabı", desc: "Uygulamalı alıştırma ve doldurulabilir şablonlar." },
  { title: "Quiz", desc: "Konu bazlı bilgi ölçme ve pekiştirme testi." },
  { title: "Sertifika Sınavı", desc: "Modül sonu yeterlilik değerlendirmesi." },
  { title: "Örnek Uygulama", desc: "Gerçek fabrika senaryosu üzerinden vaka analizi." },
  { title: "Excel Dosyaları", desc: "Hazır hesaplama, analiz ve simülasyon şablonları." },
  { title: "AI Destekli Chatbot", desc: "Konuya özel, 7/24 erişilebilir soru-cevap asistanı." },
];

export const courseStructure = [
  { step: "01", title: "Problemin Tanımı", desc: "Konunun işletmeler için neden kritik olduğu anlatılır." },
  { step: "02", title: "Teori", desc: "Temel kavramlar ve terminoloji netleştirilir." },
  { step: "03", title: "Gerçek Fabrika Örneği", desc: "Sahadan doğrulanmış somut bir vaka incelenir." },
  { step: "04", title: "Nasıl Yapılır?", desc: "Adım adım uygulama rehberi sunulur." },
  { step: "05", title: "AI Kullanımı", desc: "Yapay zekâ destekli analiz teknikleri gösterilir." },
  { step: "06", title: "Excel Uygulaması", desc: "Canlı hesaplama ve modelleme çalışması yapılır." },
  { step: "07", title: "Kontrol Listesi", desc: "Sahada doğrudan kullanılabilir kontrol listesi verilir." },
  { step: "08", title: "Şablonlar", desc: "İşletmede anında kullanılabilir dokümanlar paylaşılır." },
  { step: "09", title: "Quiz", desc: "Öğrenmenin kalıcılığı ölçülür." },
  { step: "10", title: "Sertifika", desc: "Yeterlilik belgelenir." },
];

export const academyCategories = [
  {
    key: "lean-foundation",
    letter: "A",
    title: "Lean Foundation",
    count: 15,
    desc: "Yalın düşüncenin kökenleri ve temel felsefesi.",
    modules: [
      "Lean History", "Toyota Production System", "Value", "Value Stream", "Flow",
      "Pull", "Perfection", "8 Wastes", "Kaizen", "Standardization",
      "Visual Factory", "Gemba", "Leadership", "Lean Culture", "Lean Office",
    ],
  },
  {
    key: "lean-tools",
    letter: "B",
    title: "Lean Tools",
    count: 30,
    desc: "Sahada doğrudan uygulanan yalın araç ve teknikler.",
    modules: [
      "5S", "VSM", "SMED", "Kanban", "Andon", "Heijunka", "Poka-Yoke",
      "Standard Work", "Takt Time", "Yamazumi", "Jidoka", "Line Balancing",
      "Milk Run", "Supermarket", "Cell Manufacturing",
    ],
    more: true,
  },
  {
    key: "tpm",
    letter: "C",
    title: "TPM",
    count: 15,
    desc: "Toplam verimli bakım ve ekipman etkinliği.",
    modules: [
      "Autonomous Maintenance", "Planned Maintenance", "OEE", "Loss Tree",
      "Breakdown Analysis", "MTTR", "MTBF",
    ],
    more: true,
  },
  {
    key: "six-sigma",
    letter: "D",
    title: "Six Sigma",
    count: 25,
    desc: "Veriye dayalı kalite iyileştirme ve istatistiksel analiz.",
    modules: [
      "DMAIC", "SIPOC", "VOC", "CTQ", "MSA", "SPC", "DOE",
      "Regression", "ANOVA", "Capability", "Control Plan",
    ],
    more: true,
  },
  {
    key: "yonetim",
    letter: "E",
    title: "Yönetim",
    count: 20,
    desc: "Stratejik yönetim, performans ve risk çerçeveleri.",
    modules: [
      "KPI", "Balanced Scorecard", "Strategy Deployment", "Risk",
      "Internal Audit", "Decision Matrix", "AHP", "FMEA",
    ],
    more: true,
  },
  {
    key: "veri-analitigi",
    letter: "F",
    title: "Veri Analitiği",
    count: 15,
    desc: "Operasyonel veriyi karar destek sistemine dönüştürme.",
    modules: ["Excel", "Power BI", "Python", "Minitab", "Dashboard", "AI Analytics"],
  },
];

export const academyTotalModules = academyCategories.reduce((sum, c) => sum + c.count, 0);

// ------------------------------------------------------------------
// AI Avatar Akademisi
// ------------------------------------------------------------------
export const avatarLanguages = [
  { title: "Türkçe", desc: "Ana dilde, yerel örneklerle zenginleştirilmiş anlatım." },
  { title: "İngilizce (Amerikan Aksanı)", desc: "Uluslararası kurumsal müşteriler için." },
  { title: "İngilizce (İngiliz Aksanı)", desc: "Avrupa ve Commonwealth pazarları için." },
];

export const avatarVideoLengths = ["5 dk", "10 dk", "20 dk", "45 dk", "90 dk"];

export const avatarCapabilities = [
  { title: "Sunum", desc: "Dijital avatar, eğitim içeriğini bizzat anlatır." },
  { title: "Slayt Gösterimi", desc: "Konuya eşlik eden görsel slaytları eş zamanlı gösterir." },
  { title: "Grafik Anlatımı", desc: "Veri ve grafikleri sesli olarak yorumlar." },
  { title: "Animasyon", desc: "Karmaşık kavramları animasyonla sadeleştirir." },
];

export const avatarQualityPoints = [
  {
    title: "Profesyonel Stüdyo Seslendirmesi",
    desc: "Her video, stüdyo kalitesinde ses işleme standardıyla üretilir.",
  },
  {
    title: "Aksana Özel Prodüksiyon",
    desc: "Amerikan ve İngiliz aksanları ayrı ayrı hazırlanarak hedef kitleye uyarlanır.",
  },
  {
    title: "Tutarlı Marka Kimliği",
    desc: "Avatar, tüm modüllerde aynı görsel dil ve anlatım tonuyla görünür.",
  },
];

// ------------------------------------------------------------------
// Dijital Ürünler
// ------------------------------------------------------------------
export const digitalProducts = [
  { title: "PDF Kitaplar", desc: "Her disiplin için özet referans kitapları." },
  { title: "E-Kitaplar", desc: "Derinlemesine konu anlatımlı dijital yayınlar." },
  { title: "Eğitim Sunumları", desc: "Kurum içi eğitimlerde kullanıma hazır slayt setleri." },
  { title: "AI Avatar Videoları", desc: "Çok dilli, avatar anlatımlı eğitim videoları." },
  { title: "Excel Araçları", desc: "OEE, kapasite ve maliyet hesaplama şablonları." },
  { title: "KPI Dashboard Şablonları", desc: "Yönetim raporlaması için hazır gösterge panoları." },
  { title: "Kontrol Listeleri", desc: "Sahada doğrudan kullanılabilir uygulama kontrolleri." },
  { title: "Denetim Formları", desc: "İç denetim ve uygunluk değerlendirme formları." },
  { title: "Kaizen Formları", desc: "Sürekli iyileştirme önerisi ve takip formları." },
  { title: "OEE Hesaplayıcıları", desc: "Ekipman etkinliği için hazır hesaplama araçları." },
  { title: "SPC Şablonları", desc: "İstatistiksel proses kontrol grafik şablonları." },
  { title: "FMEA Şablonları", desc: "Hata modu ve etkileri analizi dokümanları." },
  { title: "VSM Şablonları", desc: "Değer akışı haritalama çalışma dosyaları." },
  { title: "A3 Problem Çözme Formları", desc: "Yapılandırılmış problem çözme raporlama şablonu." },
  { title: "İç Denetim Formları", desc: "Sistematik iç denetim yürütme dokümanları." },
  { title: "Risk Matrisi Şablonları", desc: "Operasyonel risklerin önceliklendirilmesi için matrisler." },
  { title: "Operasyonel Sağlık Raporları", desc: "Check-Up sonrası örnek yönetim raporu formatı, 100 sayfaya kadar." },
];

export const digitalProductCategories = [
  {
    title: "Kitaplar & Sunumlar",
    items: ["PDF Kitaplar", "E-Kitaplar", "Eğitim Sunumları"],
  },
  {
    title: "Video & Avatar İçerikleri",
    items: ["AI Avatar Videoları"],
  },
  {
    title: "Şablonlar & Hesaplayıcılar",
    items: [
      "Excel Araçları", "KPI Dashboard Şablonları", "OEE Hesaplayıcıları",
      "SPC Şablonları", "FMEA Şablonları", "VSM Şablonları", "Risk Matrisi Şablonları",
    ],
  },
  {
    title: "Kontrol & Denetim Formları",
    items: [
      "Kontrol Listeleri", "Denetim Formları", "Kaizen Formları",
      "A3 Problem Çözme Formları", "İç Denetim Formları",
    ],
  },
  {
    title: "Yönetim Raporları",
    items: ["Operasyonel Sağlık Raporları"],
  },
];

// ------------------------------------------------------------------
// AI Operasyonel Asistan
// ------------------------------------------------------------------
export const aiAssistantNames = ["Operasyonel Mükemmellik GPT", "SavaşGPT", "LeanGPT"];

export const aiAssistantQuestions = [
  "OEE nasıl hesaplanır?",
  "Bu Pareto grafiği doğru mu?",
  "Bu SPC grafiğini yorumla.",
  "Bu süreçte israf var mı?",
];

export const aiAssistantSteps = [
  {
    title: "Eğitim",
    desc: "İşletme, ekibiyle birlikte akademi modüllerini tamamlar ve ortak bir terminolojiye kavuşur.",
  },
  {
    title: "Kendi Bilgi Tabanı",
    desc: "Şirketin kendi süreç dokümanları, KPI'ları ve verileriyle asistan özelleştirilir.",
  },
  {
    title: "Günlük Kullanım",
    desc: "Ekipler, sahadan çıkmadan saniyeler içinde analiz ve yorum desteği alır.",
  },
];

// ------------------------------------------------------------------
// Yol Haritası (18 Ay)
// ------------------------------------------------------------------
export const roadmapPhases = [
  {
    phase: "Aşama 1",
    period: "0–3 Ay",
    title: "Temel İçerik",
    desc: "Marka kimliği, eğitim şablonu ve ilk 10 modül (5S, Kaizen, OEE, VSM, PDCA, A3, 8 İsraf, Problem Çözme, KPI); Türkçe ve İngilizce dokümanlar.",
  },
  {
    phase: "Aşama 2",
    period: "3–6 Ay",
    title: "Dijital Akademi",
    desc: "Avatar videoları, LMS altyapısı, quiz ve sertifikasyon sistemi, web sitesi ve ilk kurumsal satışlar.",
  },
  {
    phase: "Aşama 3",
    period: "6–12 Ay",
    title: "Danışmanlık Entegrasyonu",
    desc: "Operasyonel Check-up sistemi, olgunluk modeli, denetim araçları ve sektörel vaka kütüphanesi.",
  },
  {
    phase: "Aşama 4",
    period: "12–18 Ay",
    title: "Yapay Zekâ Platformu",
    desc: "Eğitilmiş operasyon asistanı, şirket dokümanlarıyla çalışan bilgi tabanı, çok dilli içerik ve uluslararası pazarlama.",
  },
];
