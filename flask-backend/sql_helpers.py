import json
import time

# GLOBAL LISTS
numbers = ['acceptance_rate', 'national_ranking', 'population', 'tuition_normal', "tuition_oos", 'app_fee',
           'ed_date', 'early_action', 'early_decision', 'regular_decision', 'scholarship_date','letter_of_rec_required','letter_of_rec_total']

dates = ['early_decision', 'early_action', 'regular_decision', 'scholarship_date']

headers = ["college_name","alias","abbreviation","transcripts","mid_year","letter_of_rec_required","letter_of_rec_total",
            "people_for_letters","sat","sat_essay","act_essay","self_report","subject_tests","essays","supplemental_essays","acceptance_rate",
            "population","national_ranking","tuition_normal","tuition_oos","early_decision","early_action","regular_decision","scholarship_date",
            "interview","app_fee","app_site","common_app","coalition_app","college_logo","school_type","state","college_description","college_campus"]


class College:
    def __init__(self, query_result):
        self.info = query_result

    def get_json(self):
        json_obj = {}
        for i in range(len(self.info)):
            json_obj[headers[i]] = self.info[i]
        return json.dumps(json_obj)

    def order(self, college_obj, param):
        index = headers.index(param)
        return self.info[index] < college_obj.info[index]


def sortBy(jsonArr, param):
    collegeArr = []
    for c in jsonArr:
        collegeArr.append(College(c))

    return mergeSort(collegeArr, param)


def get_epoch(date_time):
    date_time += ' 00:00:00'
    pattern = "%d.%m.%Y %H:%M:%S"
    epoch = int(time.mktime(time.strptime(date_time, pattern)))
    return epoch


def get_json(query_result):
    json_obj = {}
    for i in range(len(query_result)):
        json_obj[headers[i]] = query_result[i]
    return json.dumps(json_obj)


def mergeSort(arr, param="national_ranking"):
    if len(arr) > 1:
        mid = len(arr) // 2  # Finding the mid of the array
        L = arr[:mid]  # Dividing the array elements
        R = arr[mid:]  # into 2 halves

        mergeSort(L, param)  # Sorting the first half
        mergeSort(R, param)  # Sorting the second half

        i = j = k = 0

        # Copy data to temp arrays L[] and R[] 
        while i < len(L) and j < len(R):
            if L[i].order(R[j], param):
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        # Checking if any element was left 
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
