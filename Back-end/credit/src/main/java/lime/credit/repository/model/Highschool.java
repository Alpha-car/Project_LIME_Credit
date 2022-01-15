package lime.credit.repository.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Highschool {
    @Id
    @GeneratedValue
    @Column(name = "highschool_id")
    private Long id;
    private String ATPT_OFCDC_SC_CODE;          // 시도교육청코드
    private String ATPT_OFCDC_SC_NM;            // 시도교육청명
    private String SD_SCHUL_CODE;               // 표준학교코드
    private String SCHUL_NM;                    // 학교명
    private String ENG_SCHUL_NM;                // 영문학교명
    private String SCHUL_KND_SC_NM;             // 학교종류명
    private String LCTN_SC_NM;                  // 소재지명
    private String JU_ORG_NM;                   // 관할조직명
    private String FOND_SC_NM;                  // 설립명
    private String ORG_RDNZC;                   // 도로명우편번호
    private String ORG_RDNMA;                   // 도로명주소
    private String ORG_RDNDA;                   // 도로명상세주소
    private String ORG_TELNO;                   // 전화번호
    private String HMPG_ADRES;                  // 홈페이지주소
    private String COEDU_SC_NM;                 // 남녀공학구분명
    private String ORG_FAXNO;                   // 팩스번호
    private String HS_SC_NM;                    // 고등학교구분명
    private String INDST_SPECL_CCCCL_EXST_YN;   // 산업체특별학급존재여부
    private String HS_GNRL_BUSNS_SC_NM;         // 고등학교일반실업구분명
    private String SPCLY_PURPS_HS_ORD_NM;       // 특수목적고등학교계열명
    private String ENE_BFE_SEHF_SC_NM;          // 입시전후기구분명
    private String DGHT_SC_NM;                  // 주야구분명
    private String FOND_YMD;                    // 설립일자
    private String FOAS_MEMRD;                  // 개교기념일
    private String LOAD_DTM;                    // 수정일
}

