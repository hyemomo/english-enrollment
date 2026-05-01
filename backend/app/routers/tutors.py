from fastapi import APIRouter, HTTPException

from app.services.tutor_service import find_tutor_available_times

router = APIRouter(
    prefix="/api/tutors",
    tags=["Tutors"]
)


@router.get("/{tutor_id}/available-times")
def get_tutor_available_times(tutor_id: int):
    result = find_tutor_available_times(tutor_id)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="해당 강사를 찾을 수 없습니다."
        )

    return result