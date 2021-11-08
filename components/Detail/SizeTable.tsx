import React from "react";
import {StyleSheet} from "react-native";
import {TableWrapper, Col, Table, Row, Rows} from "react-native-table-component";
import {getName} from "../../utils/data";

type SizeTableProps = {
  sizes: {
    id: number;
    custom?: string;
    chest?: string;
    shoulder?: string;
    arm?: string;
    total?: string;
    waist?: string;
    rise?: string;
    thigh?: string;
    hem?: string;
    heel?: string;
    feet?: string;
    SizeOpt: {
      id: number;
      name: string;
    };
  }[];
};
export default function SizeTable({sizes}: SizeTableProps): JSX.Element {
  const tableData = {
    tableTitle: [...sizes.map((size) => size.SizeOpt.name)],
    tableHead: [
      "",
      ...Object.entries(sizes[0])
        .map(([key, value]) => {
          if (value && key !== "id" && key !== "SizeOpt") return getName(key);
        })
        .filter((v) => v !== undefined),
    ],
    tableData: [
      ...sizes.map((item) => {
        return Object.entries(item)
          .map(([key, value]) => {
            if (value && key !== "id" && key !== "SizeOpt") return value;
          })
          .filter((v) => v !== undefined);
      }),
    ],
  };
  return (
    <Table borderStyle={{borderWidth: 1}}>
      <Row
        data={tableData.tableHead}
        flexArr={[1, 1, 1, 1, 1, 1]}
        style={styles.head}
        textStyle={styles.titleText}
      />
      <TableWrapper style={styles.wrapper}>
        <Col
          data={tableData.tableTitle}
          style={styles.title}
          textStyle={styles.titleText}
        />
        <Rows
          data={tableData.tableData}
          flexArr={Array.from({length: tableData.tableHead.length - 1}).map(() => 1)}
          style={styles.row}
          textStyle={styles.text}
        />
      </TableWrapper>
    </Table>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff"},
  head: {height: 40, backgroundColor: "#f1f8ff"},
  wrapper: {flexDirection: "row"},
  title: {flex: 1, backgroundColor: "#f6f8fa"},
  row: {height: 28},
  text: {textAlign: "center"},
  titleText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
