import { FC, memo, useEffect } from "react";
import ListCard from "../../components/ListCard/ListCard";
import { useAppSelector } from "../../store";
import {
  groupsLoadingSelector,
  groupQuerySelector,
  groupsSelector,
} from "../../selectors/group.selectors";
import { FaSpinner } from "react-icons/fa";
import { queryChangedAction } from "../../actions/groups.actions";
import { useDispatch } from "react-redux";

interface Props {}

const Groups: FC<Props> = () => {
  const dispatch = useDispatch();
  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupsLoadingSelector);
  const groups = useAppSelector(groupsSelector);
  console.log("Groups Data ", groups);

  useEffect(() => {
    dispatch(queryChangedAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" relative">
      <div className=" pt-3 mx-auto">
        <span className="text-center flex justify-center ">
          <h3>
            {loading && <FaSpinner className=" w-5 h-5 animate-spin  " />}
          </h3>
          {!loading && groups.length === 0 && (
            <h3 className=" text-red-600 font-semibold ">
              No Records Found ! Search again
            </h3>
          )}
        </span>
        <div className="flex justify-center m-5">
          <input
            onChange={(e) => dispatch(queryChangedAction(e.target.value))}
            value={query}
            type="text"
            placeholder="Search Group"
            className="bg-gray-100 rounded-lg mx-auto h-5 p-4 "
          />
        </div>
        {<ListCard data={groups!} />}
      </div>
    </div>
  );
};

Groups.defaultProps = {};

export default memo(Groups);
