export async function POST(req) {
    try {
      const { quiz_no, quiz_user_id, quiz_collect } =
        await req.json();
  
      if (
        
      ) {
        return new Response(
          JSON.stringify({
            error: "주식 코드, 사용자 ID가 필요합니다.",
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
  
      const newComment = await prisma.tbl_quiz.create({
        data: {
            quiz_no,
            quiz_user_id,
            quiz_collect,
        },
      });
  
      
    } catch (error) {
      console.error("퀴즈문제발생", error);
      return new Response(
        JSON.stringify({ error: "퀴즈 연산중 문제가 발생했습니다" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  