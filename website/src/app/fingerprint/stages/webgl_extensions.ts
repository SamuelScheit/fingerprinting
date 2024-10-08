import { x64hash128 } from "fingerprintjs/src/utils/hashing";
import {
  isChromium,
  isGecko,
  isWebKit,
} from "../../../../fingerprintjs/src/utils/browser";

const infos = {
  contextAttributes: [
    "alpha=true",
    "antialias=true",
    "depth=true",
    "desynchronized=false",
    "failIfMajorPerformanceCaveat=false",
    "powerPreference=default",
    "premultipliedAlpha=true",
    "preserveDrawingBuffer=false",
    "stencil=false",
    "xrCompatible=false",
  ],
  parameters: [
    "ACTIVE_ATTRIBUTES=35721",
    "ACTIVE_TEXTURE=34016=33984",
    "ACTIVE_UNIFORMS=35718",
    "ALIASED_LINE_WIDTH_RANGE=33902=1,1",
    "ALIASED_POINT_SIZE_RANGE=33901=1,511",
    "ALPHA=6406",
    "ALPHA_BITS=3413=8",
    "ALWAYS=519",
    "ARRAY_BUFFER=34962",
    "ARRAY_BUFFER_BINDING=34964",
    "ATTACHED_SHADERS=35717",
    "BACK=1029",
    "BLEND=3042=false",
    "BLEND_COLOR=32773=0,0,0,0",
    "BLEND_DST_ALPHA=32970=0",
    "BLEND_DST_RGB=32968=0",
    "BLEND_EQUATION=32777=32774",
    "BLEND_EQUATION_ALPHA=34877=32774",
    "BLEND_EQUATION_RGB=32777=32774",
    "BLEND_SRC_ALPHA=32971=1",
    "BLEND_SRC_RGB=32969=1",
    "BLUE_BITS=3412=8",
    "BOOL=35670",
    "BOOL_VEC2=35671",
    "BOOL_VEC3=35672",
    "BOOL_VEC4=35673",
    "BROWSER_DEFAULT_WEBGL=37444",
    "BUFFER_SIZE=34660",
    "BUFFER_USAGE=34661",
    "BYTE=5120",
    "CCW=2305",
    "CLAMP_TO_EDGE=33071",
    "COLOR_ATTACHMENT0=36064",
    "COLOR_BUFFER_BIT=16384",
    "COLOR_CLEAR_VALUE=3106=0,0,0,0",
    "COLOR_WRITEMASK=3107=true,true,true,true",
    "COMPILE_STATUS=35713",
    "COMPRESSED_TEXTURE_FORMATS=34467=",
    "CONSTANT_ALPHA=32771",
    "CONSTANT_COLOR=32769",
    "CONTEXT_LOST_WEBGL=37442",
    "CULL_FACE=2884=false",
    "CULL_FACE_MODE=2885=1029",
    "CURRENT_PROGRAM=35725",
    "CURRENT_VERTEX_ATTRIB=34342",
    "CW=2304",
    "DECR=7683",
    "DECR_WRAP=34056",
    "DELETE_STATUS=35712",
    "DEPTH_ATTACHMENT=36096",
    "DEPTH_BITS=3414=24",
    "DEPTH_BUFFER_BIT=256",
    "DEPTH_CLEAR_VALUE=2931=1",
    "DEPTH_COMPONENT16=33189",
    "DEPTH_COMPONENT=6402",
    "DEPTH_FUNC=2932=513",
    "DEPTH_RANGE=2928=0,1",
    "DEPTH_STENCIL=34041",
    "DEPTH_STENCIL_ATTACHMENT=33306",
    "DEPTH_TEST=2929=false",
    "DEPTH_WRITEMASK=2930=true",
    "DITHER=3024=true",
    "DONT_CARE=4352",
    "DST_ALPHA=772",
    "DST_COLOR=774",
    "DYNAMIC_DRAW=35048",
    "ELEMENT_ARRAY_BUFFER=34963",
    "ELEMENT_ARRAY_BUFFER_BINDING=34965",
    "EQUAL=514",
    "FASTEST=4353",
    "FLOAT=5126",
    "FLOAT_MAT2=35674",
    "FLOAT_MAT3=35675",
    "FLOAT_MAT4=35676",
    "FLOAT_VEC2=35664",
    "FLOAT_VEC3=35665",
    "FLOAT_VEC4=35666",
    "FRAGMENT_SHADER=35632",
    "FRAMEBUFFER=36160",
    "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049",
    "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048",
    "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051",
    "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050",
    "FRAMEBUFFER_BINDING=36006",
    "FRAMEBUFFER_COMPLETE=36053",
    "FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054",
    "FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057",
    "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055",
    "FRAMEBUFFER_UNSUPPORTED=36061",
    "FRONT=1028",
    "FRONT_AND_BACK=1032",
    "FRONT_FACE=2886=2305",
    "FUNC_ADD=32774",
    "FUNC_REVERSE_SUBTRACT=32779",
    "FUNC_SUBTRACT=32778",
    "GENERATE_MIPMAP_HINT=33170=4352",
    "GEQUAL=518",
    "GREATER=516",
    "GREEN_BITS=3411=8",
    "HIGH_FLOAT=36338",
    "HIGH_INT=36341",
    "IMPLEMENTATION_COLOR_READ_FORMAT=35739=6408",
    "IMPLEMENTATION_COLOR_READ_TYPE=35738=5121",
    "INCR=7682",
    "INCR_WRAP=34055",
    "INT=5124",
    "INT_VEC2=35667",
    "INT_VEC3=35668",
    "INT_VEC4=35669",
    "INVALID_ENUM=1280",
    "INVALID_FRAMEBUFFER_OPERATION=1286",
    "INVALID_OPERATION=1282",
    "INVALID_VALUE=1281",
    "INVERT=5386",
    "KEEP=7680",
    "LEQUAL=515",
    "LESS=513",
    "LINEAR=9729",
    "LINEAR_MIPMAP_LINEAR=9987",
    "LINEAR_MIPMAP_NEAREST=9985",
    "LINES=1",
    "LINE_LOOP=2",
    "LINE_STRIP=3",
    "LINE_WIDTH=2849=1",
    "LINK_STATUS=35714",
    "LOW_FLOAT=36336",
    "LOW_INT=36339",
    "LUMINANCE=6409",
    "LUMINANCE_ALPHA=6410",
    "MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661=32",
    "MAX_CUBE_MAP_TEXTURE_SIZE=34076=16384",
    "MAX_FRAGMENT_UNIFORM_VECTORS=36349=1024",
    "MAX_RENDERBUFFER_SIZE=34024=16384",
    "MAX_TEXTURE_IMAGE_UNITS=34930=16",
    "MAX_TEXTURE_SIZE=3379=16384",
    "MAX_VARYING_VECTORS=36348=30",
    "MAX_VERTEX_ATTRIBS=34921=16",
    "MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660=16",
    "MAX_VERTEX_UNIFORM_VECTORS=36347=1024",
    "MAX_VIEWPORT_DIMS=3386=16384,16384",
    "MEDIUM_FLOAT=36337",
    "MEDIUM_INT=36340",
    "MIRRORED_REPEAT=33648",
    "NEAREST=9728",
    "NEAREST_MIPMAP_LINEAR=9986",
    "NEAREST_MIPMAP_NEAREST=9984",
    "NEVER=512",
    "NICEST=4354",
    "NONE=0",
    "NOTEQUAL=517",
    "NO_ERROR=0",
    "ONE=1",
    "ONE_MINUS_CONSTANT_ALPHA=32772",
    "ONE_MINUS_CONSTANT_COLOR=32770",
    "ONE_MINUS_DST_ALPHA=773",
    "ONE_MINUS_DST_COLOR=775",
    "ONE_MINUS_SRC_ALPHA=771",
    "ONE_MINUS_SRC_COLOR=769",
    "OUT_OF_MEMORY=1285",
    "PACK_ALIGNMENT=3333=4",
    "POINTS=0",
    "POLYGON_OFFSET_FACTOR=32824=0",
    "POLYGON_OFFSET_FILL=32823=false",
    "POLYGON_OFFSET_UNITS=10752=0",
    "RED_BITS=3410=8",
    "RENDERBUFFER=36161",
    "RENDERBUFFER_ALPHA_SIZE=36179",
    "RENDERBUFFER_BINDING=36007",
    "RENDERBUFFER_BLUE_SIZE=36178",
    "RENDERBUFFER_DEPTH_SIZE=36180",
    "RENDERBUFFER_GREEN_SIZE=36177",
    "RENDERBUFFER_HEIGHT=36163",
    "RENDERBUFFER_INTERNAL_FORMAT=36164",
    "RENDERBUFFER_RED_SIZE=36176",
    "RENDERBUFFER_STENCIL_SIZE=36181",
    "RENDERBUFFER_WIDTH=36162",
    "RENDERER=7937=WebKit WebGL",
    "REPEAT=10497",
    "REPLACE=7681",
    "RGB565=36194",
    "RGB5_A1=32855",
    "RGB8=32849",
    "RGB=6407",
    "RGBA4=32854",
    "RGBA8=32856",
    "RGBA=6408",
    "SAMPLER_2D=35678",
    "SAMPLER_CUBE=35680",
    "SAMPLES=32937=4",
    "SAMPLE_ALPHA_TO_COVERAGE=32926",
    "SAMPLE_BUFFERS=32936=1",
    "SAMPLE_COVERAGE=32928",
    "SAMPLE_COVERAGE_INVERT=32939=false",
    "SAMPLE_COVERAGE_VALUE=32938=1",
    "SCISSOR_BOX=3088=0,0,300,150",
    "SCISSOR_TEST=3089=false",
    "SHADER_TYPE=35663",
    "SHADING_LANGUAGE_VERSION=35724=WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
    "SHORT=5122",
    "SRC_ALPHA=770",
    "SRC_ALPHA_SATURATE=776",
    "SRC_COLOR=768",
    "STATIC_DRAW=35044",
    "STENCIL_ATTACHMENT=36128",
    "STENCIL_BACK_FAIL=34817=7680",
    "STENCIL_BACK_FUNC=34816=519",
    "STENCIL_BACK_PASS_DEPTH_FAIL=34818=7680",
    "STENCIL_BACK_PASS_DEPTH_PASS=34819=7680",
    "STENCIL_BACK_REF=36003=0",
    "STENCIL_BACK_VALUE_MASK=36004=2147483647",
    "STENCIL_BACK_WRITEMASK=36005=2147483647",
    "STENCIL_BITS=3415=0",
    "STENCIL_BUFFER_BIT=1024",
    "STENCIL_CLEAR_VALUE=2961=0",
    "STENCIL_FAIL=2964=7680",
    "STENCIL_FUNC=2962=519",
    "STENCIL_INDEX8=36168",
    "STENCIL_PASS_DEPTH_FAIL=2965=7680",
    "STENCIL_PASS_DEPTH_PASS=2966=7680",
    "STENCIL_REF=2967=0",
    "STENCIL_TEST=2960=false",
    "STENCIL_VALUE_MASK=2963=2147483647",
    "STENCIL_WRITEMASK=2968=2147483647",
    "STREAM_DRAW=35040",
    "SUBPIXEL_BITS=3408=4",
    "TEXTURE0=33984",
    "TEXTURE10=33994",
    "TEXTURE11=33995",
    "TEXTURE12=33996",
    "TEXTURE13=33997",
    "TEXTURE14=33998",
    "TEXTURE15=33999",
    "TEXTURE16=34000",
    "TEXTURE17=34001",
    "TEXTURE18=34002",
    "TEXTURE19=34003",
    "TEXTURE1=33985",
    "TEXTURE20=34004",
    "TEXTURE21=34005",
    "TEXTURE22=34006",
    "TEXTURE23=34007",
    "TEXTURE24=34008",
    "TEXTURE25=34009",
    "TEXTURE26=34010",
    "TEXTURE27=34011",
    "TEXTURE28=34012",
    "TEXTURE29=34013",
    "TEXTURE2=33986",
    "TEXTURE30=34014",
    "TEXTURE31=34015",
    "TEXTURE3=33987",
    "TEXTURE4=33988",
    "TEXTURE5=33989",
    "TEXTURE6=33990",
    "TEXTURE7=33991",
    "TEXTURE8=33992",
    "TEXTURE9=33993",
    "TEXTURE=5890",
    "TEXTURE_2D=3553",
    "TEXTURE_BINDING_2D=32873",
    "TEXTURE_BINDING_CUBE_MAP=34068",
    "TEXTURE_CUBE_MAP=34067",
    "TEXTURE_CUBE_MAP_NEGATIVE_X=34070",
    "TEXTURE_CUBE_MAP_NEGATIVE_Y=34072",
    "TEXTURE_CUBE_MAP_NEGATIVE_Z=34074",
    "TEXTURE_CUBE_MAP_POSITIVE_X=34069",
    "TEXTURE_CUBE_MAP_POSITIVE_Y=34071",
    "TEXTURE_CUBE_MAP_POSITIVE_Z=34073",
    "TEXTURE_MAG_FILTER=10240",
    "TEXTURE_MIN_FILTER=10241",
    "TEXTURE_WRAP_S=10242",
    "TEXTURE_WRAP_T=10243",
    "TRIANGLES=4",
    "TRIANGLE_FAN=6",
    "TRIANGLE_STRIP=5",
    "UNPACK_ALIGNMENT=3317=4",
    "UNPACK_COLORSPACE_CONVERSION_WEBGL=37443=37444",
    "UNPACK_FLIP_Y_WEBGL=37440=false",
    "UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441=false",
    "UNSIGNED_BYTE=5121",
    "UNSIGNED_INT=5125",
    "UNSIGNED_SHORT=5123",
    "UNSIGNED_SHORT_4_4_4_4=32819",
    "UNSIGNED_SHORT_5_5_5_1=32820",
    "UNSIGNED_SHORT_5_6_5=33635",
    "VALIDATE_STATUS=35715",
    "VENDOR=7936=WebKit",
    "VERSION=7938=WebGL 1.0 (OpenGL ES 2.0 Chromium)",
    "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975",
    "VERTEX_ATTRIB_ARRAY_ENABLED=34338",
    "VERTEX_ATTRIB_ARRAY_NORMALIZED=34922",
    "VERTEX_ATTRIB_ARRAY_POINTER=34373",
    "VERTEX_ATTRIB_ARRAY_SIZE=34339",
    "VERTEX_ATTRIB_ARRAY_STRIDE=34340",
    "VERTEX_ATTRIB_ARRAY_TYPE=34341",
    "VERTEX_SHADER=35633",
    "VIEWPORT=2978=0,0,300,150",
    "ZERO=0",
  ],
  shaderPrecisions: [
    "FRAGMENT_SHADER.LOW_FLOAT=127,127,23",
    "FRAGMENT_SHADER.MEDIUM_FLOAT=127,127,23",
    "FRAGMENT_SHADER.HIGH_FLOAT=127,127,23",
    "FRAGMENT_SHADER.LOW_INT=31,30,0",
    "FRAGMENT_SHADER.MEDIUM_INT=31,30,0",
    "FRAGMENT_SHADER.HIGH_INT=31,30,0",
    "VERTEX_SHADER.LOW_FLOAT=127,127,23",
    "VERTEX_SHADER.MEDIUM_FLOAT=127,127,23",
    "VERTEX_SHADER.HIGH_FLOAT=127,127,23",
    "VERTEX_SHADER.LOW_INT=31,30,0",
    "VERTEX_SHADER.MEDIUM_INT=31,30,0",
    "VERTEX_SHADER.HIGH_INT=31,30,0",
  ],
  extensions: [
    "ANGLE_instanced_arrays",
    "EXT_blend_minmax",
    "EXT_clip_control",
    "EXT_color_buffer_half_float",
    "EXT_depth_clamp",
    "EXT_disjoint_timer_query",
    "EXT_float_blend",
    "EXT_frag_depth",
    "EXT_polygon_offset_clamp",
    "EXT_shader_texture_lod",
    "EXT_texture_compression_bptc",
    "EXT_texture_compression_rgtc",
    "EXT_texture_filter_anisotropic",
    "EXT_texture_mirror_clamp_to_edge",
    "EXT_sRGB",
    "KHR_parallel_shader_compile",
    "OES_element_index_uint",
    "OES_fbo_render_mipmap",
    "OES_standard_derivatives",
    "OES_texture_float",
    "OES_texture_float_linear",
    "OES_texture_half_float",
    "OES_texture_half_float_linear",
    "OES_vertex_array_object",
    "WEBGL_blend_func_extended",
    "WEBGL_color_buffer_float",
    "WEBGL_compressed_texture_astc",
    "WEBGL_compressed_texture_etc",
    "WEBGL_compressed_texture_etc1",
    "WEBGL_compressed_texture_pvrtc",
    "WEBGL_compressed_texture_s3tc",
    "WEBGL_compressed_texture_s3tc_srgb",
    "WEBGL_debug_renderer_info",
    "WEBGL_debug_shaders",
    "WEBGL_depth_texture",
    "WEBGL_draw_buffers",
    "WEBGL_lose_context",
    "WEBGL_multi_draw",
    "WEBGL_polygon_mode",
  ],
  extensionParameters: [
    "CLIP_DEPTH_MODE_EXT=37725",
    "CLIP_ORIGIN_EXT=37724",
    "COLOR_ATTACHMENT0_WEBGL=36064",
    "COLOR_ATTACHMENT10_WEBGL=36074",
    "COLOR_ATTACHMENT11_WEBGL=36075",
    "COLOR_ATTACHMENT12_WEBGL=36076",
    "COLOR_ATTACHMENT13_WEBGL=36077",
    "COLOR_ATTACHMENT14_WEBGL=36078",
    "COLOR_ATTACHMENT15_WEBGL=36079",
    "COLOR_ATTACHMENT1_WEBGL=36065",
    "COLOR_ATTACHMENT2_WEBGL=36066",
    "COLOR_ATTACHMENT3_WEBGL=36067",
    "COLOR_ATTACHMENT4_WEBGL=36068",
    "COLOR_ATTACHMENT5_WEBGL=36069",
    "COLOR_ATTACHMENT6_WEBGL=36070",
    "COLOR_ATTACHMENT7_WEBGL=36071",
    "COLOR_ATTACHMENT8_WEBGL=36072",
    "COLOR_ATTACHMENT9_WEBGL=36073",
    "COMPLETION_STATUS_KHR=37297",
    "COMPRESSED_R11_EAC=37488",
    "COMPRESSED_RED_GREEN_RGTC2_EXT=36285",
    "COMPRESSED_RED_RGTC1_EXT=36283",
    "COMPRESSED_RG11_EAC=37490",
    "COMPRESSED_RGB8_ETC2=37492",
    "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494",
    "COMPRESSED_RGBA8_ETC2_EAC=37496",
    "COMPRESSED_RGBA_ASTC_10x10_KHR=37819",
    "COMPRESSED_RGBA_ASTC_10x5_KHR=37816",
    "COMPRESSED_RGBA_ASTC_10x6_KHR=37817",
    "COMPRESSED_RGBA_ASTC_10x8_KHR=37818",
    "COMPRESSED_RGBA_ASTC_12x10_KHR=37820",
    "COMPRESSED_RGBA_ASTC_12x12_KHR=37821",
    "COMPRESSED_RGBA_ASTC_4x4_KHR=37808",
    "COMPRESSED_RGBA_ASTC_5x4_KHR=37809",
    "COMPRESSED_RGBA_ASTC_5x5_KHR=37810",
    "COMPRESSED_RGBA_ASTC_6x5_KHR=37811",
    "COMPRESSED_RGBA_ASTC_6x6_KHR=37812",
    "COMPRESSED_RGBA_ASTC_8x5_KHR=37813",
    "COMPRESSED_RGBA_ASTC_8x6_KHR=37814",
    "COMPRESSED_RGBA_ASTC_8x8_KHR=37815",
    "COMPRESSED_RGBA_BPTC_UNORM_EXT=36492",
    "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843",
    "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842",
    "COMPRESSED_RGBA_S3TC_DXT1_EXT=33777",
    "COMPRESSED_RGBA_S3TC_DXT3_EXT=33778",
    "COMPRESSED_RGBA_S3TC_DXT5_EXT=33779",
    "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494",
    "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495",
    "COMPRESSED_RGB_ETC1_WEBGL=36196",
    "COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841",
    "COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840",
    "COMPRESSED_RGB_S3TC_DXT1_EXT=33776",
    "COMPRESSED_SIGNED_R11_EAC=37489",
    "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286",
    "COMPRESSED_SIGNED_RED_RGTC1_EXT=36284",
    "COMPRESSED_SIGNED_RG11_EAC=37491",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846",
    "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847",
    "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497",
    "COMPRESSED_SRGB8_ETC2=37493",
    "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495",
    "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493",
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917",
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918",
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919",
    "COMPRESSED_SRGB_S3TC_DXT1_EXT=35916",
    "CURRENT_QUERY_EXT=34917",
    "DEPTH_CLAMP_EXT=34383",
    "DRAW_BUFFER0_WEBGL=34853=1029",
    "DRAW_BUFFER10_WEBGL=34863",
    "DRAW_BUFFER11_WEBGL=34864",
    "DRAW_BUFFER12_WEBGL=34865",
    "DRAW_BUFFER13_WEBGL=34866",
    "DRAW_BUFFER14_WEBGL=34867",
    "DRAW_BUFFER15_WEBGL=34868",
    "DRAW_BUFFER1_WEBGL=34854=1029",
    "DRAW_BUFFER2_WEBGL=34855",
    "DRAW_BUFFER3_WEBGL=34856",
    "DRAW_BUFFER4_WEBGL=34857",
    "DRAW_BUFFER5_WEBGL=34858",
    "DRAW_BUFFER6_WEBGL=34859",
    "DRAW_BUFFER7_WEBGL=34860",
    "DRAW_BUFFER8_WEBGL=34861",
    "DRAW_BUFFER9_WEBGL=34862",
    "FRAGMENT_SHADER_DERIVATIVE_HINT_OES=35723=4352",
    "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT=33296",
    "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT=33297",
    "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT=33297",
    "GPU_DISJOINT_EXT=36795=false",
    "HALF_FLOAT_OES=36193",
    "LOWER_LEFT_EXT=36001",
    "MAX_COLOR_ATTACHMENTS_WEBGL=36063=8",
    "MAX_DRAW_BUFFERS_WEBGL=34852=8",
    "MAX_DUAL_SOURCE_DRAW_BUFFERS_WEBGL=35068",
    "MAX_EXT=32776",
    "MAX_TEXTURE_MAX_ANISOTROPY_EXT=34047=16",
    "MIN_EXT=32775",
    "MIRROR_CLAMP_TO_EDGE_EXT=34627",
    "NEGATIVE_ONE_TO_ONE_EXT=37726",
    "ONE_MINUS_SRC1_ALPHA_WEBGL=35067",
    "ONE_MINUS_SRC1_COLOR_WEBGL=35066",
    "POLYGON_OFFSET_CLAMP_EXT=36379",
    "QUERY_COUNTER_BITS_EXT=34916",
    "QUERY_RESULT_AVAILABLE_EXT=34919",
    "QUERY_RESULT_EXT=34918",
    "RGB16F_EXT=34843",
    "RGBA16F_EXT=34842",
    "RGBA32F_EXT=34836",
    "SRC1_ALPHA_WEBGL=34185",
    "SRC1_COLOR_WEBGL=35065",
    "SRGB8_ALPHA8_EXT=35907",
    "SRGB_ALPHA_EXT=35906",
    "SRGB_EXT=35904",
    "TEXTURE_MAX_ANISOTROPY_EXT=34046",
    "TIMESTAMP_EXT=36392=0",
    "TIME_ELAPSED_EXT=35007",
    "UNMASKED_RENDERER_WEBGL=37446",
    "UNMASKED_VENDOR_WEBGL=37445",
    "UNSIGNED_INT_24_8_WEBGL=34042",
    "UNSIGNED_NORMALIZED_EXT=35863",
    "UNSIGNED_NORMALIZED_EXT=35863",
    "UPPER_LEFT_EXT=36002",
    "VERTEX_ARRAY_BINDING_OES=34229=null",
    "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE=35070",
    "ZERO_TO_ONE_EXT=37727",
  ],
};

export function getWebglExtensions(ctx?: WebGLRenderingContext) {
  if (!ctx) return null;

  const n = getParameters(ctx);
  var t;

  var e = ["32926", "32928"],
    r = n.parameters.map(function (n: any) {
      var t = n.split("=", 3),
        r = t[0],
        i = t[1];
      return void 0 !== t[2] || e.includes(i)
        ? "".concat(r, "(").concat(i, ")=null")
        : "".concat(r, "=").concat(i);
    }),
    i = n.extensionParameters.map(function (n: any) {
      var t = n.split("=", 3),
        e = t[0],
        r = t[1],
        i = t[2];
      return void 0 !== i && "34047" !== r
        ? "".concat(e, "(").concat(r, ")=").concat(i)
        : "".concat(e, "=").concat(r);
    });
  return {
    contextAttributes: x64hash128(n.contextAttributes.join("&")),
    parameters: x64hash128(r.join("&")),
    parameters2: x64hash128(n.parameters.join("&")),
    shaderPrecisions: x64hash128(n.shaderPrecisions.join("&")),
    extensions: x64hash128(
      (null === (t = n.extensions) || void 0 === t ? void 0 : t.join(",")) ||
      "",
    ),
    extensionParameters: x64hash128(i.join(",")),
    extensionParameters2: x64hash128(n.extensionParameters.join("&")),
  };
}

function tt(n: any, t: any, e: any) {
  var r = n.getShaderPrecisionFormat(n[t], n[e]);
  return r ? [r.rangeMin, r.rangeMax, r.precision] : [];
}

function rt(n: any) {
  return "string" == typeof n && !n.match(/[^A-Z0-9_x]/);
}

function et(n: any) {
  return Object.keys(n.__proto__).filter(rt);
}

const Kn = ["FRAGMENT_SHADER", "VERTEX_SHADER"];
const Qn = [
  "LOW_FLOAT",
  "MEDIUM_FLOAT",
  "HIGH_FLOAT",
  "LOW_INT",
  "MEDIUM_INT",
  "HIGH_INT",
];

const zn = new Set([
  10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962,
  2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107,
  32773, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970,
  32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408,
  3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877,
  34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347,
  36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938,
]);

const qn = new Set([
  34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449,
]);

function getParameters(t: WebGLRenderingContext) {
  var e = t.getSupportedExtensions(),
    r = t.getContextAttributes(),
    i = [],
    o = [],
    u = [],
    a = [];
  if (r)
    for (var c = 0, s = Object.keys(r); c < s.length; c++) {
      var f = s[c]!;
      // @ts-ignore
      i.push("".concat(f, "=").concat(r[f]));
    }
  for (var l = 0, v = et(t); l < v.length; l++) {
    let key = v[l]!; // @ts-ignore
    var d = t[key];
    o.push(
      ""
        .concat(key, "=")
        .concat(d)
        .concat(zn.has(d) ? "=".concat(t.getParameter(d)) : ""),
    );
  }
  if (e)
    for (var h = 0, m = e; h < m.length; h++) {
      var p = m[h]!;
      if (
        !(
          (p === "WEBGL_debug_renderer_info" && isGecko()) ||
          ("WEBGL_polygon_mode" === p && (isChromium() || isWebKit()))
        )
      ) {
        var g = t.getExtension(p);
        if (g)
          for (var w = 0, b = et(g); w < b.length; w++) {
            var y = b[w]!,
              d = g[y];
            u.push(
              ""
                .concat(y, "=")
                .concat(d)
                .concat(qn.has(d) ? "=".concat(t.getParameter(d)) : ""),
            );
          }
      }
    }
  for (var E = 0, k = Kn; E < k.length; E++)
    for (var S = k[E]!, R = 0, L = Qn; R < L.length; R++) {
      var I = L[R]!,
        P = tt(t, S, I);
      a.push("".concat(S, ".").concat(I, "=").concat(P.join(",")));
    }

  return (
    u.sort(),
    o.sort(),
    {
      contextAttributes: i,
      parameters: o,
      shaderPrecisions: a,
      extensions: e,
      extensionParameters: u,
    }
  );
}
