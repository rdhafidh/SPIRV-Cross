static const float _17[5] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };

static float4 FragColor;
static float4 v0;

struct SPIRV_Cross_Input
{
    float4 v0 : TEXCOORD0;
};

struct SPIRV_Cross_Output
{
    float4 FragColor : SV_Target0;
};

void frag_main()
{
    float lut[5] = _17;
    int _33;
    for (int _46 = 0; _46 < 4; _33 = _46 + 1, FragColor += lut[_33].xxxx, _46 = _33)
    {
    }
}

SPIRV_Cross_Output main(SPIRV_Cross_Input stage_input)
{
    v0 = stage_input.v0;
    frag_main();
    SPIRV_Cross_Output stage_output;
    stage_output.FragColor = FragColor;
    return stage_output;
}
